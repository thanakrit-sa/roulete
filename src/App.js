import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import History_Bet from './component/history_bet';
import Result_Bet from './component/result_bet';
import Player_Bet from './component/player_bet';
import Pad_Bet from './component/pad_bet';

function App() {

  const [bet_value, setBetValue] = useState([])
  const [result_data, setResultData] = useState([])
  const [status_clear, setStatusClear] = useState(false)
  const [status_random, setStatusRandom] = useState(false)

  const click_bet = (value_bet) => {
    setBetValue([...bet_value, value_bet]);
    setStatusClear(false)
  }

  const result_bet = (result, status_btn) => {
    setResultData(result)
    setStatusRandom(status_btn)
  }

  const clear_bet = () => {
    setBetValue([])
    setResultData([])
    setStatusClear(true)
    setStatusRandom(false)
  }

  return (
    <>
      <div className="w-full absolute mt-72 sm:px-24 lg:px-56">
        <History_Bet result_bet={result_bet} clear_bet={clear_bet} bet_value={bet_value} />
      </div>
      <div className="bg-gray-800 h-screen text-white">
        <div className="bg-green-800 h-80 text-white pt-5 sm:px-24 lg:px-56">
          <div className="grid lg:grid-cols-5 sm:grid-cols-6 gap-4">
            <Result_Bet result_data={result_data} bet_value={bet_value} />
            <Player_Bet bet_value={bet_value} result_data={result_data} />
          </div>
        </div>
        <Pad_Bet click_bet={click_bet} status_clear={status_clear} bet_value={bet_value} status_random={status_random} />
      </div>
    </>
  );
}

export default App;
