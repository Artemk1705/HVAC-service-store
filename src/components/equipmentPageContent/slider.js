import React, { useRef, useEffect, useState } from "react";

export const CustomSlider = ({
  seerValue,
  setSeerValue,
  seerData,
  category,
}) => {
  const sliderRef = useRef(null);
  const [seerList, setSeerList] = useState([]);

  // Определяем диапазон SEER
  const isHeatPumpCategory =
    category === "heat_pumps" || category === "furnace_and_heat_pump";
  const seerStart = isHeatPumpCategory ? 14 : 13; // Начальное значение
  const seerEnd = isHeatPumpCategory ? 20 : 19; // Конечное значение

  useEffect(() => {
    console.log("📡 Полученные seerData:", seerData);
    if (seerData && seerData.length > 0) {
      const uniqueSeerValues = [
        ...new Set(
          seerData
            .map((item) => parseFloat(item.seer))
            .filter((seer) => !isNaN(seer))
            .map((seer) => Math.round(seer))
        ),
      ].sort((a, b) => a - b);

      console.log("✅ Уникальные значения SEER:", uniqueSeerValues);
      setSeerList(uniqueSeerValues);
    }
  }, [seerData]);

  // Устанавливаем начальное значение SEER при смене категории
  useEffect(() => {
    setSeerValue(seerStart);
  }, [category]);

  const handleMouseMove = (e) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100);

    let newSeer = Math.round(
      seerStart + (percentage / 100) * (seerEnd - seerStart)
    );

    if (!seerList.includes(newSeer)) {
      const closestSeer = seerList.reduce((prev, curr) =>
        Math.abs(curr - newSeer) < Math.abs(prev - newSeer) ? curr : prev
      );
      newSeer = closestSeer;
    }

    setSeerValue(newSeer);
  };

  const handleMouseDown = (e) => {
    handleMouseMove(e);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="slide_container">
      <h3 className="eff_title">Efficiency Level {seerValue} SEER</h3>
      <h4 className="eff_sub_title">
        The more efficient, the more you save on energy
      </h4>

      {/* Контейнер шкалы */}
      <div
        className="eff_bar"
        style={{ position: "relative", textAlign: "center" }}
      >
        {[...Array(seerEnd - seerStart + 1)].map((_, i) => {
          const seer = seerStart + i;
          const isActive = seerList.includes(seer);

          return (
            <span
              key={seer}
              style={{
                position: "absolute",
                left: `${((seer - seerStart) / (seerEnd - seerStart)) * 100}%`,
                transform: "translateX(-50%)",
                color: isActive ? "#32326e" : "#aaa",
                fontWeight: isActive ? "bold" : "normal",
                fontSize: "14px",
                top: "-20px",
              }}
            >
              {seer}
            </span>
          );
        })}

        {/* Шкала слайдера */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          style={{
            position: "relative",
            height: "7.5px",
            borderRadius: "5px",
            background: "#ddd",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {[...Array(seerEnd - seerStart + 1)].map((_, i) => {
            const seer = seerStart + i;
            const isActive = seerList.includes(seer);

            return (
              <div
                key={seer}
                style={{
                  position: "absolute",
                  left: `${
                    ((seer - seerStart) / (seerEnd - seerStart)) * 100
                  }%`,
                  width: "4px",
                  height: "20px",
                  background: isActive ? "#32326e" : "#ccc",
                  top: "-5px",
                }}
              ></div>
            );
          })}

          {/* Заполненная часть слайдера */}
          <div
            style={{
              position: "absolute",
              height: "90%",
              width: `${
                ((seerValue - seerStart) / (seerEnd - seerStart)) * 100
              }%`,
              borderRadius: "5px",
              background: "#32326e",
            }}
          ></div>

          {/* Бегунок */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: `${
                ((seerValue - seerStart) / (seerEnd - seerStart)) * 100
              }%`,
              transform: "translate(-50%, -50%)",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "#32326e",
              border: "2px solid white",
              cursor: "grab",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
