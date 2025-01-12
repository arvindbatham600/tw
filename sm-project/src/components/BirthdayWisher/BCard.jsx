import React from "react";

const BCard = ({ name, wish }) => {
  return (
    <div className="h-[200px] w-[200px] px-3 py-3 bg-gray-300 rounded">
      <h1 className="text-center font-bold text-lg">Happy Birthday {name}</h1>
          <div className="px-3 py-3">{wish}</div>
    </div>
  );
};

export default BCard;
