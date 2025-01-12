import React, { useRef, useState } from "react";

const OtpLogin = () => {
  const [val, setVal] = useState({ num1: "", num2: "", num3: "", num4: "" });
  const useRefs = [useRef(), useRef(), useRef(), useRef()];
  const [mobileScreen, setMobileScreen] = useState(true);
  const data = [
    {
      name: "num1",
      value: val.num1,
    },
    {
      name: "num2",
      value: val.num2,
    },
    {
      name: "num3",
      value: val.num3,
    },
    {
      name: "num4",
      value: val.num4,
    },
  ];

  console.log("data", data);

  const handleChange = (e, index) => {
    const value = e.target.value;
    setVal((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
    if (index < useRefs.length - 1) {
      useRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      setVal((prev) => ({
        ...prev,
        [e.target.name]: "",
      }));

      useRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center py-5">
      {mobileScreen ? (
        <div className="h-[350px] w-[350px] bg-black rounded border-white border-2">
          <div className="text-white text-center text-[30px] py-3">
            Login Via OTP
          </div>
          <div className="pt-5 text-center ">
            <input
              className="py-3 px-3 bg-black border-white border-2 rounded text-white"
              type="Number"
              placeholder="Enter Mobile Number"
            />
          </div>

          <div className="text-center">
            <button
              onClick={() => setMobileScreen(!mobileScreen)}
              className="bg-black border-2 border-white my-4 rounded px-2 py-2 text-white"
            >
              Send OTP
            </button>
          </div>
        </div>
      ) : (
        <div className="h-[350px] w-[350px] bg-black rounded border-white border-2 ">
          <div className="text-white text-center text-[30px] py-3">
            Login Via OTP
          </div>
          <div className="pt-5 text-center flex gap-4 justify-center ">
            {data.map((element, index) => (
              <input
                key={index + 1}
                className=" bg-inherit border-[1px] w-[50px] border-white text-white rounded-lg p-2 text-center"
                type="Number"
                value={element.value}
                ref={useRefs[index]}
                min={0}
                max={9}
                name={element.name}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setMobileScreen(!mobileScreen)}
              className="bg-black border-2 border-white my-4 rounded px-2 py-2 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* // otp screen  */}
    </div>
  );
};

export default OtpLogin;
