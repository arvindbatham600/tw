import React from "react";

const Profile = () => {
  return (
    <div className="h-screen w-screen bg-zinc-800 flex justify-center items-center">
      <div className="h-[400px] w-[400px] bg-gray-100 flex flex-col">
        <div className="h-[40%] bg-[url('https://imgs.search.brave.com/Na2D47pI7Q2VJckRAwDW6C2IQxvnlCHRhcgRzONACug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGVtcGxhdGUu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE1LzExLzI1MTkw/NzU0L1BsYWluLVBp/bmstV2FsbHBhcGVy/cy1CYWNrZ3JvdW5k/LURvd25sb2FkLmpw/Zw')]"></div>
        <div className="h-[60%]">
          <div>
            <h3>Arvind Batham (22)</h3>
            <h6>India</h6>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
