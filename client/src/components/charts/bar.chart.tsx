import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

interface BarChartProps {
  data: { title: string; amount: number }[];
  type: string;
  ceiling: number;
}

const BarChart: React.FC<BarChartProps> = ({ data, type, ceiling }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      const sorted = data.sort((a, b) => b.amount - a.amount);
      const sliced = sorted.slice(0, 5);

      const chart = echarts.init(chartRef.current);

      const colors = ["#4174D9", "#4A8C74", "#F28705", "#D92929", "#4EA4D9"];

      const options = {
        tooltip: {},
        xAxis: {
          type: "category",
          data: sliced.map((expense) => expense.title),
          axisLabel: {
            interval: 0,
            rotate: 30,
          },
        },
        yAxis: {
          type: "value",
          name: "Amount",
          max: ceiling,
        },
        series: [
          {
            name: type,
            type: "bar",
            data: sliced.map((expense, index) => ({
              value: expense.amount,
              itemStyle: {
                color: colors[index % colors.length],
              },
              label: {
                show: true,
                position: "top",
                formatter: `${Number(expense.amount).toLocaleString("en-US")}`,
              },
            })),
          },
        ],
      };

      chart.setOption(options);

      window.addEventListener("resize", () => {
        chart.resize();
      });

      return () => {
        chart.dispose();
      };
    }
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default BarChart;
