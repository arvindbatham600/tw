import React from "react";

const Card = ({ githubInfo }) => {
  return (
    <>
      <div className="h-[400px] w-[400px] bg-slate-50 rounded px-5 py-5 ">
        <div className="flex justify-center gap-8  items-center">
          <img
            className="h-[150px] w-[150px] rounded-full"
            src={githubInfo?.avatar_url}
            alt="image"
          />
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold">{githubInfo?.name}</h2>
            <div className="flex gap-2">
              <div className="flex flex-col items-center">
                <div>Followers</div>
                <div>{githubInfo?.followers}</div>
              </div>
              <div className="flex flex-col items-center">
                <div>Following</div>
                <div>{githubInfo?.following}</div>
              </div>
            </div>
          </div>
        </div>

        {githubInfo?.bio && (
          <div className="text-center py-2">
            <b>Bio - </b> {githubInfo?.bio}{" "}
          </div>
        )}

        <div className="flex justify-center gap-4 py-2">
          <div className="flex flex-col items-center">
            <div> Public Repos </div>
            <div> {githubInfo?.public_repos} </div>
          </div>

          <div className="flex flex-col items-center">
            <div> Public Gists </div>
            <div> {githubInfo?.public_gists} </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
