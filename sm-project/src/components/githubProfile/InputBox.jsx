import React from "react";

const InputBox = ({ setUsername, username, getDetails }) => {
  const handleKey = (e) => {
    if (e.key === "Enter") {
      getDetails();
    }
  };
  return (
    <div>
      <div className="flex gap-2 w-[600px] bg-slate-900 px-5 py-5 rounded  ">
        <input
          className="border-2 w-[80%] px-2"
          type="text"
          placeholder="Enter Username"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-slate-500 text-white px-4 py-2 rounded-md"
          onClick={getDetails}
          disabled={!username}
        >
          Get Info
        </button>
      </div>
    </div>
  );
};

export default InputBox;
