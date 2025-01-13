import BackgroundChanger from "./components/BackgroundChanger";
import BirthdayWisher from "./components/BirthdayWisher/BirthdayWisher";
import GithubProfileCard from "./components/githubProfile/GithubProfileCard";
import Home from "./components/Home";
import OtpLogin from "./components/OtpLogin";
import ParaGenerator from "./components/ParaGenerator";
import Profile from "./components/Profile-project/Profile";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/background-changer" element={<BackgroundChanger />} />
        <Route path="/para-generator" element={<ParaGenerator />} />
        <Route path="/github-profile" element={<GithubProfileCard />} />
        <Route path="/otp-login" element={<OtpLogin />} />
        <Route path="/birthday-wisher" element={<BirthdayWisher />} />
      </Routes>
    </>
  );
};

export default App;
