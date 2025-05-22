"use client";

import { useState, useEffect } from "react";
import { loadCart, saveCart } from "@/lib/cart-utils";
import {
  submitEquipForm,
  fetchFilteredEquipmentFromAPI,
  fetchEquipment,
} from "@/lib/equip-api";

import {
  getPowerByHouseSize,
  getCategoriesForRequest,
} from "@/lib/filter-utils";
import { companyNames } from "@/constants/company-names";
import { questions } from "@/constants/questions";

export function useQuestionnaireLogic() {
  const [showForm, setShowForm] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(["", "", "", "", ""]);
  const [filteredEquipment, setFilteredEquipment] = useState([]);
  const [showEquipment, setShowEquipment] = useState(false);
  const [seerValue, setSeerValue] = useState(13);
  const [furnaceType, setFurnaceType] = useState("");
  const [airHandlerType, setAirHandlerType] = useState("");
  const [initialEquipment, setInitialEquipment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pendingItem, setPendingItem] = useState(null);

  useEffect(() => {
    async function loadEquipment() {
      setLoading(true);
      const data = await fetchEquipment();
      setInitialEquipment(data);
      setFilteredEquipment(data);
      setLoading(false);
    }
    loadEquipment();
  }, []);

  useEffect(() => {
    const savedCart = loadCart();
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  const handleAnswer = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentStep] = answer;
    setSelectedAnswers(newAnswers);

    if (currentStep === 5) {
      const power = getPowerByHouseSize(answer);
      const unitType = newAnswers[4];
      const selectedSystem = newAnswers[3];
      if (power) {
        filterEquipment(power, selectedSystem, unitType);
      }
      setShowEquipment(true);
    }
    setCurrentStep(currentStep + 1);
  };

  const handleSubmitForm = async (formData) => {
    setLoading(true);
    const response = await submitEquipForm(formData);
    if (response.success) {
      const power = getPowerByHouseSize(formData.selectedAnswers[5]);
      const selectedSystem = formData.selectedAnswers[3];
      const unitType = formData.selectedAnswers[4];
      if (power) {
        filterEquipment(power, selectedSystem, unitType);
      }
    }
    setLoading(false);
    setShowForm(false);
    setShowEquipment(true);
  };

  const handleAddToCart = (item) => {
    setPendingItem(item);
    setShowConfirm(true);
  };

  const confirmAddToCart = () => {
    const item = pendingItem;
    const alreadyInCart = cartItems.find(
      (i) => i.name === item.name && i.model === item.model
    );

    if (alreadyInCart) {
      const updatedCart = cartItems.map((i) =>
        i.name === item.name && i.model === item.model
          ? { ...i, qty: i.qty + 1 }
          : i
      );
      setCartItems(updatedCart);
    } else {
      const newItem = { ...item, qty: 1 };
      setCartItems([...cartItems, newItem]);
    }

    setShowConfirm(false);
    setPendingItem(null);
  };

  const filterEquipment = async (power, selectedSystem, unitType) => {
    if (!selectedSystem) {
      console.error("❌ Ошибка: selectedSystem не передан в filterEquipment");
      return;
    }

    const categories = getCategoriesForRequest(selectedSystem, unitType);
    const companyIndex = 4;
    const selectedCompany = selectedAnswers[companyIndex];

    if (categories.length === 0) {
      console.error("❌ Ошибка: Неизвестная категория оборудования.");
      return;
    }

    const typeFilterMap = {
      "Ceiling Recessed": "Residential Ceiling Recessed",
      "Floor Mounted": "Residential Floor Mounted",
      "Horizontal Ducted": "Residential Horizontal Ducted",
      "Wall Mounted": "Residential Wall Mount",
    };

    const shouldShowFurnaceFilter =
      selectedAnswers[3] === "Furnace" ||
      selectedAnswers[3] === "Furnace and AC" ||
      selectedAnswers[3] === "Furnace and Heat Pump";
    const shouldShowAirHandlerFilter = selectedAnswers[3] === "Air Handler";

    const typeFilter = typeFilterMap[unitType] || null;

    const mergedData = await fetchFilteredEquipmentFromAPI(
      categories,
      power,
      typeFilter
    );

    let finalData = mergedData;

    if (typeFilter) {
      finalData = finalData.filter((item) => item.type === typeFilter);
    }

    if (selectedCompany && selectedCompany !== "Not sure") {
      finalData = finalData.filter((item) => {
        const companyName = companyNames[item.company_id]?.toLowerCase().trim();
        const selectedCompanyName = selectedCompany.toLowerCase().trim();
        return companyName === selectedCompanyName;
      });
    }

    console.log("📜 ОТФИЛЬТРОВАННЫЕ ДАННЫЕ:", finalData);
    setFilteredEquipment(finalData);
    setShowEquipment(true);
  };

  const getCurrentOptions = () => {
    if (currentStep === 0) return questions[0];
    if (currentStep === 1) return questions[1];
    if (currentStep === 2) return questions[2];
    if (currentStep === 3) return questions[3][selectedAnswers[2]] || [];
    if (currentStep === 4) {
      const isMinisplit =
        selectedAnswers[2] === "Minisplit" &&
        questions[3]["Minisplit"].includes(selectedAnswers[3]);
      return isMinisplit
        ? ["Mitsubishi", "York"]
        : ["American Standart", "Hitachi", "Ameristar", "York"];
    }
    if (currentStep === 5) return questions[5];
    return [];
  };

  const visibleEquipment = filteredEquipment
    .filter((item) => {
      // Filter SEER
      if (
        [
          "Residential Wall Mount",
          "Ceiling Recessed",
          "Floor Mounted",
          "Horizontal Ducted",
        ].includes(item.type)
      ) {
        return true;
      }
      if (
        item.category === "air_conditioners" ||
        item.category === "heat_pumps"
      ) {
        const itemSeer = parseFloat(item.seer);
        if (isNaN(itemSeer)) return false;
        return Math.round(itemSeer) === seerValue;
      }
      return true;
    })
    .filter((item) => {
      // Filter Furnace Type
      if (item.category.toLowerCase().trim() === "furnace") {
        if (furnaceType) {
          return (
            item.type.toLowerCase().trim() === furnaceType.toLowerCase().trim()
          );
        }
      }
      return true;
    })
    .filter((item) => {
      // Filter Air Handler Type
      if (item.category.toLowerCase().trim() === "air_handlers") {
        if (airHandlerType) {
          return (
            item.type.toLowerCase().trim() ===
            airHandlerType.toLowerCase().trim()
          );
        }
      }
      return true;
    });

  // 🛠️ Теперь группируем именно отфильтрованные данные:
  const groupedVisibleEquipment = visibleEquipment.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // ✅ Список категорий теперь из видимого оборудования
  const categories = [
    ...new Set(visibleEquipment.map((item) => item.category)),
  ];
  const hasMultipleCategories = categories.length > 1;

  const handleBack = () => {
    const newAnswers = [...selectedAnswers];
    newAnswers.pop(); // убираем последний ответ
    setSelectedAnswers(newAnswers);
    setCurrentStep(currentStep - 1);
  };

  return {
    showForm,
    currentStep,
    selectedAnswers,
    filteredEquipment,
    showEquipment,
    seerValue,
    setSeerValue,
    furnaceType,
    setFurnaceType,
    airHandlerType,
    setAirHandlerType,
    loading,
    showConfirm,
    initialEquipment,
    hasMultipleCategories,
    groupedVisibleEquipment,
    getCurrentOptions,
    handleAnswer,
    handleSubmitForm,
    handleAddToCart,
    confirmAddToCart,
    handleBack,
  };
}
