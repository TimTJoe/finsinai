import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface PieChartProps {
  data: { title: string; amount: number }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      const chart = echarts.init(chartRef.current);
      const sorted = data.sort((a, b) => b.amount - a.amount);
      const sliced = sorted.slice(0, 5);

      const colors = ["#4174D9", "#4A8C74", "#F28705", "#D92929", "#4EA4D9"];

      const options = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}<br/> Amount {c}", // Show percentage in tooltip
        },
        legend: {
          orient: window.innerWidth < 768 ? "horizontal" : "vertical",
          right: 10,
          bottom: 10,
          data: sliced.slice(0, 4).map((item) => item.title),
        },
        series: [
          {
            name: "Expenses",
            type: "pie",
            radius: "55%",
            center: ["50%", "40%"],
            data: sliced.map((expense, index) => ({
              name: expense.title,
              value: expense.amount,
              itemStyle: {
                color: colors[index % colors.length],
              },
            })),
            label: {
              show: true,
              formatter: "{d}%",
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      chart.setOption(options);

      // Resize the chart when the window is resized
      window.addEventListener("resize", () => {
        chart.resize();
      });

      return () => {
        // Dispose of the chart instance when the component unmounts
        chart.dispose();
      };
    }
  }, [data]);

  const getTotalAmount = (data: { title: string; amount: number }[]) => {
    return data.reduce((total, expense) => total + expense.amount, 0);
  };

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default PieChart;
