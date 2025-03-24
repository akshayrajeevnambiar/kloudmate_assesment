import React, { useRef, useEffect, useState } from "react";
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
  const containerRef = useRef(null);
  const [boxStyles, setBoxStyles] = useState([]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;

        const minBoxWidth = 150;
        const itemCount = data.length;
        const columns = Math.floor(width / minBoxWidth) || 1;
        const rows = Math.ceil(itemCount / columns);
        const boxWidth = (width - (columns - 1) * 10) / columns;
        const boxHeight = (height - (rows - 1) * 10) / rows;

        const styles = data.map((_, index) => {
          const isLastRow = index >= (rows - 1) * columns;
          const lastRowCount = itemCount - (rows - 1) * columns;

          return {
            width: isLastRow
              ? `${(width - (lastRowCount - 1) * 10) / lastRowCount}px`
              : `${boxWidth}px`,
            height: `${boxHeight}px`,
          };
        });

        setBoxStyles(styles);
      }
    });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="multi-panel" ref={containerRef}>
      {data.map((item, index) => (
        <div key={index} className="multi-item" style={boxStyles[index]}>
          <div className="value">{item.value}</div>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MultiSeriesPanel;
