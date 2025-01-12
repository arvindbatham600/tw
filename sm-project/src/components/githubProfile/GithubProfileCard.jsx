import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import InputBox from "./InputBox";

const GithubProfileCard = () => {
  const [username, setUsername] = useState("");
  const [githubInfo, setGithubInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  console.log(Boolean(githubInfo?.id));

  const getDetails = async () => {
    const url = `https://api.github.com/users/${username}`;

    try {
      setLoading(true);
      setNotFound(false);
      const { data, status } = await axios.get(url);
      if (status === 200) {
        setGithubInfo(data);
        setLoading(false);
      }
    } catch (error) {
      setNotFound(true);
      setLoading(false);
    }
  };
  return (
    <div className="w-screen h-screen bg-slate-400 flex items-center flex-col gap-4 py-4 ">
      <InputBox
        setUsername={setUsername}
        username={username}
        getDetails={getDetails}
      />
      {loading ? (
        <div> Fetching Information.... </div>
      ) : notFound ? (
        <div> User not found </div>
      ) : (
        githubInfo?.id && <Card githubInfo={githubInfo} />
      )}
    </div>
  );
};

export default GithubProfileCard;
