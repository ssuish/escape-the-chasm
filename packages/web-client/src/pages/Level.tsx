//The pag where the game starts
//Maps, Levels
import TrophyRoomButton from '../components/trophy/TrophyRoomButton';
import OptionsButton from '../components/options/OptionsButton';
//Profile

import React from "react";
import useWalletConnection from "../hooks/useWalletConnection";
import WalletSelector from "../components/wallet/WalletSelector";

const Level = () => {
    return(
        <>
          <div className="bg-[url(../src/assets/level_select1.png)] m-0 bg-no-repeat bg-cover h-screen w-screen -z-1 absolute">
            <div className='flex absolute top-0 right-10'>
              <TrophyRoomButton />
              <OptionsButton />
            </div>
          </div>
          
        </>
    )
}

export default Level;