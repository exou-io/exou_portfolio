import React from "react";

export default function GridWithFlexVerticalLO() {
  return (
    <div
      className="grid grid-cols-2"
      style={{ height: "500px", width: "100%" }}
    >
      <div className="col-span-1 flex flex-col" style={{ width: "80%" }}>
        <div className="flex-grow-0 flex-shrink-0" style={{ height: "60%" }}>
          <div className="flex flex-col h-full">
            <div className="flex-shrink-0 p-4 bg-gray-200">Top div content</div>
            <div className="flex-grow p-4 bg-gray-300">Middle div content</div>
            <div className="flex-grow p-4 bg-gray-400">Bottom div content</div>
          </div>
        </div>
        <div
          className="flex-grow-0 flex-shrink-0 bg-purple flex justify-center items-center"
          style={{ height: "40%" }}
        >
          <h1>I LIVE HERE FOREVER!</h1>
        </div>
      </div>
      <div className="col-span-1 bg-red-500 h-full w-full"></div>
    </div>
  );
}
