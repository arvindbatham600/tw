import React, { useMemo, useState } from "react";

const ParaGenerator = () => {
  const [wordCount, setWordCount] = useState(0);
  const [paragraph, setParagraph] = useState([]);

  const para =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vero enim deserunt? Amet architecto et adipisci unde pariatur perspiciatis iste, iusto fugiat quibusdam odit laboriosam sint qui ipsa ipsum quis consectetur dicta aperiam dignissimos animi, nemo officiis distinctio dolor harum! Cupiditate inventore ipsum repellendus veniam perferendis rem non culpa doloribus, itaque eaque. Nihil, incidunt? Nesciunt optio voluptatem itaque repellat eveniet animi molestias dolores, illum, veniam vitae voluptates incidunt sit doloribus minima alias id saepe soluta? Inventore adipisci quis facilis voluptates in! Expedita tempora quisquam vel molestiae esse perspiciatis, neque commodi recusandae! Suscipit ipsa, similique dolorum excepturi commodi reprehenderit temporibus sequi!";

  // convert para into array
  const wordsArray = useMemo(() => {
    return para.split(" ");
  });

  const handleClick = (e) => {
    let temp = [];
    for (let i = 0; i < wordCount; i++) {
      temp.push(wordsArray[Math.floor(Math.random() * wordsArray.length)]);
    }
    setParagraph(temp.join(" "));
  };

  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="flex flex-col items-center mt-8 gap-2 w-[90%]  ">
        <h1 className=" font-bold text-xl">Para Generator</h1>
        <div className="flex gap-2 w-[100%] ">
          <input
            className="border-2 w-[80%] px-2"
            type="Number"
            placeholder="Enter words length"
            onChange={(e) => setWordCount(e.target.value)}
          />
          <button
            className="bg-slate-500 text-white px-4 py-2 rounded-md"
            disabled={wordCount < 1}
            onClick={handleClick}
          >
            Generate
          </button>
        </div>
        <div className="">
          {paragraph.length > 0
            ? paragraph
            : "Enter number and Click on Generate "}
        </div>
      </div>
    </div>
  );
};

export default ParaGenerator;
