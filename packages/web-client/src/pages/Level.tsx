//The pag where the game starts
//Maps, Levels
import TrophyRoomButton from "../components/trophy/TrophyRoomButton";
import OptionsButton from "../components/options/OptionsButton";
//Profile

import React from "react";
import LogoutButton from "../components/layout/LogoutButton";

const Level = () => {
  return (
    <>
      <div className="bg-[url(../src/assets/level_select1.png)] m-0 bg-no-repeat bg-cover h-screen w-screen -z-1 absolute">
        <div className="flex absolute top-0 right-10">
          <TrophyRoomButton />
          <OptionsButton />
          <LogoutButton />
        </div>
      </div>
    </>
  );
};

export default Level;
