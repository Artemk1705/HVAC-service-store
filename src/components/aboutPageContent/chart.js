import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

export function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    Chart.register(
      LineController,
      LineElement,
      PointElement,
      LinearScale,
      CategoryScale
    );

    let newChartInstance;
    if (chartRef && chartRef.current) {
      if (typeof newChartInstance !== "undefined") newChartInstance.destroy();

      newChartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          labels: [
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
          ],
          datasets: [
            {
              label: "Order grow",
              data: [152, 370, 520, 800, 1024, 1195, 1450, 1700, 2400],
              fill: false,
              backgroundColor: "rgb(255,100,255)",
              borderColor: "rgb(255, 255, 255)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              ticks: {
                color: "rgb(255, 255, 255)",
              },
            },
            y: {
              ticks: {
                color: "rgb(255, 255, 255)",
              },
            },
          },
          plugins: {
            legend: {
              labels: {
                color: "green",
              },
            },
          },
        },
      });

      return () => {
        newChartInstance.destroy();
      };
    }
  }, []);

  return (
    <div className="flex justify-center items-center mt-15 mb-25">
      <div
        className="bg-gradient w-4/5 rounded-lg p-10"
        style={{ height: "400px" }}
      >
        <h2 className="text-center text-3xl text-white uppercase">
          Annual orders
        </h2>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
