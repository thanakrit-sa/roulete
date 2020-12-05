import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import History_Bet from './component/history_bet';
import Result_Bet from './component/result_bet';
import Player_Bet from './component/player_bet';
import Pad_Bet from './component/pad_bet';

function App() {

  const [bet_value, setBetValue] = useState([])
  const [data, setData] = useState()

  const click_bet = (value_bet) => {
    setBetValue([...bet_value, value_bet]);
  }

  return (
    <>
      <div className="px-56 w-full absolute mt-72">
        <History_Bet />
      </div>
      <div className="bg-gray-800 h-screen text-white">
        <div className="bg-green-800 h-80 text-white px-56 pt-5">
          <div class="grid grid-cols-3 gap-4">
            <Result_Bet />
            <div className="col-span-2">
              <label>Player BET KEYS</label>
              <hr className="my-3" />
              <div className="grid grid-rows-6 grid-flow-col gap-1 overflow-x-scroll">
                {bet_value.map((item, i) =>
                  <div className="bg-gray-800 px-3 py-1 m-0 w-40 text-xs">{item.type + "x" + item.value}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Pad_Bet click_bet={click_bet}/>
      </div>
    </>
  );
}

export default App;
