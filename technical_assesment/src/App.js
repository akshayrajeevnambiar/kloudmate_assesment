import React from "react";
import GridLayout from "react-grid-layout";
import SingleSeriesPanel from "./components/SingleSeriesPanel";
import MultiSeriesPanel from "./components/MultiSeriesPanel";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const App = () => {
  const layout = [
    { i: "single-title", x: 0, y: 0, w: 3, h: 1.5 },
    { i: "single", x: 0, y: 0, w: 3, h: 4 },
    { i: "multi-title", x: 0, y: 6, w: 3, h: 1.5 },
    { i: "multi", x: 0, y: 6, w: 7, h: 6 },
  ];

  return (
    <div
      style={{
        padding: "0px 20px 20px 20px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        margin={[0, 20]}
        isDraggable={false}
        isResizable={true}
        verticalCompact={false}
      >
        <h2 key="single-title" style={{ marginBottom: 20 }}>
          Single Series Data
        </h2>
        <div
          key="single"
          style={{
            backgroundColor: "#333",
            padding: 10,
            borderColor: "white",
            borderWidth: 2,
            borderStyle: "solid",
          }}
        >
          <SingleSeriesPanel />
        </div>
        <h2 key="multi-title">Multi Series Data</h2>
        <div
          key="multi"
          style={{
            backgroundColor: "#333",
            padding: "15px 15px 0px 15px",
            borderColor: "white",
            borderWidth: 2,
            borderStyle: "solid",
          }}
        >
          <MultiSeriesPanel />
        </div>
      </GridLayout>
    </div>
  );
};

export default App;
