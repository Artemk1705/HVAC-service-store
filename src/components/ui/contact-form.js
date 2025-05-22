"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState, useRef } from "react";
import { PolicyBlock } from "./policy-block";
import ReCAPTCHA from "react-google-recaptcha";
import CardRadioGroup from "./radio-inputs";

export function FormContact() {
  const customerOptions = [
    {
      id: "new customer",
      title: "New Customer",
      specs: "We never worked with you before",
    },
    {
      id: "current customer",
      title: "Current Customer",
      specs: "We wroked with your problem before",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    clientType: "",
  });

  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Отправка данных на сервер
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset(); // очищаем после выполнения

      if (!token) {
        alert("reCAPTCHA verification failed. Please try again.");
        return;
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, token }),
      });

      if (response.ok) {
        alert("Форма успешно отправлена!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          state: "",
          zipCode: "",
          clientType: "",
        });
      } else {
        alert("Ошибка при отправке формы");
      }
    } catch (error) {
      console.error("Ошибка отправки данных:", error);
    }
  };

  return (
    <div className="bg-neutral-900 text-white w-screen py-25">
      <h2 className="text-center text-2xl uppercase py-5">CONTACT US TODAY</h2>
      <form onSubmit={handleSubmit} className="contact_form">
        <div className="dis_input_container">
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone Number"
            onChange={handleChange}
            value={formData.phone}
          />
          <Input
            id="addressLine1"
            name="addressLine1"
            type="text"
            placeholder="Address Line 1"
            onChange={handleChange}
            value={formData.addressLine1}
            required
          />
          <Input
            id="addressLine2"
            name="addressLine2"
            type="text"
            placeholder="Address Line 2"
            onChange={handleChange}
            value={formData.addressLine2}
          />
          <Input
            id="city"
            name="city"
            type="text"
            placeholder="City"
            onChange={handleChange}
            value={formData.city}
            required
          />
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="placeholder-gray-500 w-100 h-10 bg-white my-4 px-4 rounded-lg text-gray-600"
          >
            <option value="">Select State</option>
            <option value="Oregon">Oregon</option>
            <option value="Washington">Washington</option>
          </select>
          <Input
            id="zipCode"
            name="zipCode"
            type="text"
            placeholder="ZIP Code"
            onChange={handleChange}
            value={formData.zipCode}
            required
          />
          <div className="radio_container my-5">
            <CardRadioGroup
              options={customerOptions}
              selectedValue={formData.clientType}
              onChange={handleChange}
            />
            <PolicyBlock />
          </div>
        </div>

        <Button variant="blur" type="submit">
          SUBMIT
        </Button>
      </form>
    </div>
  );
}
