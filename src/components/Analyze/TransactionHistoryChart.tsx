"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import SwitchSelector from "../SwitchSelector";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

interface TransactionHistoryChartProps {
  className?: string;
}

export const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: true,
        maxTicksLimit: 4,
        maxRotation: 0,
      },
    },
    y: {
      ticks: {
        autoSkip: true,
        maxTicksLimit: 3,
      },
      grid: {
        display: true,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      data: [5, 10, 30, 14, 50, 20, 40],
      borderColor: "#FD9109",
    },
  ],
};

const TransactionHistoryChart: React.FC<TransactionHistoryChartProps> = ({
  className,
}) => {
  const [period, setPeriod] = useState(0);

  return (
    <div
      className={`bg-white rounded-[10px] pt-[18px] pl-3 pr-[25px] ${
        className ?? ""
      }`}
    >
      <div className="flex items-center pl-8 mb-3">
        <span className="text-lg leading-[107%] mr-[25px] whitespace-nowrap">
          Mazze Transaction History
        </span>
        <SwitchSelector
          items={["1D", "7D", "1M"]}
          selected={period}
          setSelected={setPeriod}
        />
      </div>
      <Line
        height={"100px"}
        options={{
          responsive: true,
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
            y: {
              ticks: {
                count: 4,
                color: "#737B8B",
              },
              grid: {
                display: true,
                color: "#E2E7E7",
              },
            },
          },
          elements: {
            point: {
              pointStyle: "circle",
              radius: 0,
              hitRadius: 6,
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              data: [5, 10, 30, 14, 50, 20, 40],
              borderColor: "#FD9109",
            },
          ],
        }}
      />
    </div>
  );
};

export default TransactionHistoryChart;