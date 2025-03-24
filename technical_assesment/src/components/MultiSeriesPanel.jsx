import React from "react";
import { useResizeObserver } from "../hooks/useResizeObserver";
import "../styles/MultiSeriesPanel.css";

const data = [
  { label: "Namespace A", value: 3 },
  { label: "Namespace B", value: 3 },
  { label: "Namespace C", value: 3 },
  { label: "Namespace D", value: 3 },
  { label: "Namespace E", value: 2 },
  { label: "Namespace F", value: 1 },
];

const MultiSeriesPanel = () => {
  const [ref, size] = useResizeObserver();
  const { width = 0, height = 0 } = size;

  const idealItemWidth = 200;
  const columns = Math.max(1, Math.floor(width / idealItemWidth));
  const rows = Math.ceil(data.length / columns);
  const itemHeight = height / rows;

  return (
    <div
      ref={ref}
      className="grid-panel"
      style={{
        gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
        gridAutoFlow: "row dense",
      }}
    >
      {data.map((item, index) => (
        <div className="grid-item" key={index}>
          <div
            className="value"
            style={{
              fontSize: `clamp(24px, ${
                Math.min(width / columns, itemHeight) / 2
              }px, 72px)`,
            }}
          >
            {item.value}
          </div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MultiSeriesPanel;
