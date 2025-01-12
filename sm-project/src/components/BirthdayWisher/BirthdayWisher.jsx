import React, { useEffect, useState } from "react";
import BCard from "./BCard";

const birthdayWishes = [
  {
    id: 1,
    wish: "Happy Birthday, may your day be filled with love, joy, and laughter!",
  },
  {
    id: 2,
    wish: "Wishing you all the best on your special day! Have a wonderful birthday!",
  },
  {
    id: 3,
    wish: "Cheers to another year of happiness, success, and adventures. Happy Birthday!",
  },
];

const BirthdayWisher = () => {
  const [name, setName] = useState("");
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    if (name === "") {
      setShowCards(false);
    }
  }, [name]);

  const handleClick = () => {
    setShowCards(true);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && name) {
      handleClick();
    }
  };
  return (
    <div className="w-screen h-screen bg-slate-700">
      <div className="flex justify-center">
        <div className="flex gap-2 w-[80%] mt-4 ">
          <input
            className="border-2 w-[80%] px-2 rounded"
            type="text"
            placeholder="Enter Your Name"
            onKeyDown={handleKey}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-slate-500 text-white px-4 py-2 rounded-md"
            disabled={!name}
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
      </div>
      {showCards && name && (
        <div className="flex justify-center gap-4 flex-wrap my-5">
          {birthdayWishes.map((item) => (
            <BCard key={item.id} name={name} wish={item.wish} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BirthdayWisher;
