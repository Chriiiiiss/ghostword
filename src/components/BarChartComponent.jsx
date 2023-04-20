import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "France 3", count: 38 },
  { name: "France 2", count: 17 },
  { name: "France Culture", count: 98 },
  { name: "BFM", count: 83 },
];

const hexToRgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return { r, g, b };
};

const interpolateColor = (color1, color2, factor) => {
  const r = Math.round(color1.r + factor * (color2.r - color1.r));
  const g = Math.round(color1.g + factor * (color2.g - color1.g));
  const b = Math.round(color1.b + factor * (color2.b - color1.b));

  return `rgb(${r}, ${g}, ${b})`;
};

const CustomBar = (props) => {
  const { x, y, width, height, count, maxValue } = props;
  const color = getColor(count, maxValue);

  return (
    <Rectangle
      {...props}
      x={x}
      y={y}
      width={width}
      height={height}
      fill={color}
    />
  );
};

const getColor = (count, maxCount) => {
  const lowColor = hexToRgb("#B3C2F9");
  const mediumColor = hexToRgb("#7D98F8");
  const highColor = hexToRgb("#597BF7");

  const factor = count / maxCount;

  if (factor < 0.5) {
    return interpolateColor(lowColor, mediumColor, factor * 2);
  } else {
    return interpolateColor(mediumColor, highColor, (factor - 0.5) * 2);
  }
};

const maxValue = Math.max(...data.map((item) => item.count));

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" shape={<CustomBar maxValue={maxValue} />} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
