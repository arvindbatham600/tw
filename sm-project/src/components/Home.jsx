import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
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
const sourceCode = "https://github.com/arvindbatham600/tw";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-screen bg-slate-900 pl-8 py-4">
        <h1 className="text-white  text-lg">
          Small Projects with React and Tailwindcss
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
        <div
          className="py-4 flex items-center gap-2 text-pink-200 cursor-pointer "
          onClick={() => {
            window.location.href = sourceCode;
          }}
        >
          <div>Source Code - </div> <FaGithub />
        </div>
      </div>
    </>
  );
};

export default Home;
