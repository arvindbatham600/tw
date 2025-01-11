import React, { useEffect, useState } from "react";

const colors = [
  {
    id: 1,
    color: "red",
    code: "#ff0000",
  },
  {
    id: 2,
    color: "yellow",
    code: "#ffff00",
  },
  {
    id: 3,
    color: "black",
    code: "#000000",
  },
  {
    id: 4,
    color: "purple",
    code: "#800080",
  },
  {
    id: 5,
    color: "green",
    code: "#008000",
  },
  {
    id: 6,
    color: "blue",
    code: "#0000ff",
  },
  {
    id: 7,
    color: "default",
    code: "#808080", // grey
  },
];

const BackgroundChanger = () => {
  const [color, setColor] = useState("#bb1ccc");
  const clickHandler = (value) => {
    setColor(value);
  };
  return (
    <div
      style={{ backgroundColor: color }}
      className={`w-screen h-screen flex flex-col-reverse`}
    >
      <div className="flex justify-center h-[60px] w-screen mb-6">
        <div className="flex justify-between px-6 shadow-md py-3 bg-white w-[95%] rounded ">
          {colors.map((item) => (
            <button
              key={item.id}
              className="text-blue-800 px-4 py-2 rounded text-center flex items-center justify-center "
              style={{ backgroundColor: `${item.code}` }}
              onClick={() => clickHandler(item.code)}
            >
              {item.color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BackgroundChanger;
