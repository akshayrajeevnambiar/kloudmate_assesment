import React from "react";
import { useResizeObserver } from "../hooks/useResizeObserver";
import "../styles/SingleSeriesPanel.css";

const SingleSeriesPanel = () => {
  const [ref, size] = useResizeObserver();
  const { width = 0, height = 0 } = size;

  const valueFontSize = Math.min(width / 5, height / 2.5);
  const labelFontSize = Math.min(32, width / 15);

  const label = "Revenue (USD)";
  const value = "$12,345.67";

  return (
    <div ref={ref} className="single-panel">
      <div className="single-value" style={{ fontSize: `${valueFontSize}px` }}>
        <div
          className="single-label"
          style={{ fontSize: `${labelFontSize}px` }}
        >
          {label}
        </div>
        {value}
      </div>
    </div>
  );
};

export default SingleSeriesPanel;
