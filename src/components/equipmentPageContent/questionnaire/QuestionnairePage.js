"use client";

import { useQuestionnaireLogic } from "@/components/equipmentPageContent/questionnaire/useQuestionnaireHook";
import { EquipmentCard } from "@/components/equipmentPageContent/questionnaire/equip-card";
import { EquipForm } from "@/components/equipmentPageContent/equip-form";
import { ConfirmModal } from "@/components/equipmentPageContent/questionnaire/confirm";
import { LoadingBar } from "@/components/ui/loading-cercle";
import {
  AirHandlerFilter,
  FurnaceFilter,
} from "@/components/equipmentPageContent/questionnaire/filter";
import { CustomSlider } from "@/components/equipmentPageContent/slider";

export default function Questionnaire() {
  const {
    showForm,
    currentStep,
    selectedAnswers,
    filteredEquipment,
    visibleEquipment,
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
    handleBack,
    handleSubmitForm,
    handleAddToCart,
    confirmAddToCart,
    shouldShowFurnaceFilter,
    shouldShowAirHandlerFilter,
  } = useQuestionnaireLogic();
  return (
    <div
      className={`equip_page_container ${
        hasMultipleCategories ? "multi-category" : ""
      }`}
    >
      {loading ? (
        <div className="loading_screen">
          <h2>Loading ...</h2>
          <LoadingBar className="spinner" />
        </div>
      ) : (
        <>
          <h1 className="equip_main_title">Selection of equipment</h1>
          <div
            className={`equip_page_content ${
              hasMultipleCategories ? "multi-category-content" : ""
            }`}
          >
            <div
              className={`equip_container ${
                hasMultipleCategories ? "multi-category-container" : ""
              }`}
            >
              {showForm ? (
                <EquipForm
                  answers={selectedAnswers}
                  onSubmit={handleSubmitForm}
                />
              ) : !showEquipment ? (
                <>
                  <div className="equip_option_container">
                    {(getCurrentOptions() || []).map((option, index) => (
                      <button
                        className="option_button"
                        key={index}
                        onClick={() => handleAnswer(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  {currentStep > 0 && (
                    <button className="option_button_back" onClick={handleBack}>
                      Back
                    </button>
                  )}
                </>
              ) : (
                <div className="equip_page_content">
                  <div className="equip_double_container">
                    {Object.keys(groupedVisibleEquipment || {}).length > 0 ? (
                      Object.entries(groupedVisibleEquipment || {}).map(
                        ([category, items], catIndex) => (
                          <div
                            key={category}
                            className="equip_category_section"
                          >
                            <div
                              className={`equip_card_container ${
                                hasMultipleCategories
                                  ? `multi-category-cards-${catIndex + 1}`
                                  : ""
                              }`}
                            >
                              {items.map((item, index) => (
                                <EquipmentCard
                                  key={index}
                                  item={item}
                                  onAddToCart={handleAddToCart}
                                  hasMultipleCategories={hasMultipleCategories}
                                  categoryIndex={catIndex}
                                />
                              ))}
                            </div>
                          </div>
                        )
                      )
                    ) : (
                      <p>No equipment available for selected criteria.</p>
                    )}
                  </div>
                  <h1 className="equip_ch_title">{selectedAnswers[3]}</h1>
                  <div className="filter_block">
                    <CustomSlider
                      seerValue={seerValue}
                      setSeerValue={setSeerValue}
                      seerData={filteredEquipment}
                      category={
                        selectedAnswers[3] === "Heat Pump" ||
                        selectedAnswers[3] === "Furnace and Heat Pump"
                          ? "heat_pumps"
                          : "default"
                      }
                    />

                    {shouldShowFurnaceFilter && (
                      <FurnaceFilter
                        furnaceType={furnaceType}
                        setFurnaceType={setFurnaceType}
                        equipmentData={initialEquipment}
                      />
                    )}

                    {shouldShowAirHandlerFilter && (
                      <AirHandlerFilter
                        airHandlerType={airHandlerType}
                        setAirHandlerType={setAirHandlerType}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
      <ConfirmModal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={confirmAddToCart}
        message="Do you want to add this equipment to your cart?"
      />
    </div>
  );
}
