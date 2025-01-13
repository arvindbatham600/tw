import React from "react";
import { useNavigate } from "react-router-dom";
const projects = [
  {
    id: 1,
    name: "Profile card",
    link: "/profile",
  },
  {
    id: 2,
    name: "background changer",
    link: "/background-changer",
  },
  {
    id: 3,
    name: "Paragraph generator",
    link: "/para-generator",
  },
  {
    id: 4,
    name: "Github Profile Checker",
    link: "/github-profile",
  },
  {
    id: 5,
    name: "OTP login screen",
    link: "/otp-login",
  },
  {
    id: 6,
    name: "Birthday wisher",
    link: "/birthday-wisher",
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-screen bg-slate-900 px-4 py-4">
        <h1 className="text-white  text-lg">
          Small Projects with React and tailwind
        </h1>
        <div className="flex flex-col gap-2 my-4">
          {projects.map((project) => (
            <div
              onClick={() => navigate(project.link)}
              className="text-orange-200 cursor-pointer "
              key={project.id}
            >
              {project.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
