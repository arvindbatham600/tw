import React from "react";

const details = [
  {
    id: 1,
    name: "Followers",
    value: 80,
  },
  {
    id: 2,
    name: "Likes",
    value: 803,
  },
  {
    id: 3,
    name: "Photos",
    value: 1.4,
  },
];

const Profile = () => {
  return (
    <section className="h-screen w-screen bg-zinc-800 flex justify-center items-center">
      <div className="h-[400px] w-[400px] bg-gray-100 flex flex-col rounded-xl overflow-hidden">
        <div className="h-[40%] bg-[url('https://img.freepik.com/free-photo/neon-light-bathroom-sign-night_23-2150002439.jpg?semt=ais_hybrid')] relative  flex justify-center">
          <div
            className="w-[80px] h-[80px] bg-slate-200 rounded-full bg-[url('https://www.shutterstock.com/image-vector/young-man-anime-style-character-260nw-2240084863.jpg')] bg-cover absolute"
            style={{
              bottom: "-35px",
            }}
          ></div>
        </div>
        <div className="h-[60%]">
          <div className="h-[60%] flex flex-col justify-center items-center">
            <div className="text-center">
              <h3>
                <b>Arvind Batham</b> (22)
              </h3>
              <h6>India</h6>
            </div>
          </div>
          <div className="h-[40%] flex justify-between px-10 text-center border-t-2 py-4">
            {details.map((item) => (
              <div key={item.id}>
                <div>
                  {" "}
                  <b>{item.value}K</b>{" "}
                </div>{" "}
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
