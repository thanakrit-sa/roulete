import './App.css';
import React, { useState } from 'react'
import HistoryBet from './component/history_bet';
import ResultBet from './component/result_bet';
import PlayerBet from './component/player_bet';
import PadBet from './component/pad_bet';

function App() {

  const [betValue, setBetValue] = useState([])
  const [resultValue, setResultValue] = useState([])
  const [statusClear, setStatusClear] = useState(false)
  const [statusRandom, setStatusRandom] = useState(false)

  const selectBet = (value) => {
    setBetValue([...betValue, value]);
    setStatusClear(false)
  }

  const resultBet = (result, btnRanDom) => {
    setResultValue(result)
    setStatusRandom(btnRanDom)
  }

  const clearBet = () => {
    setBetValue([])
    setResultValue([])
    setStatusClear(true)
    setStatusRandom(false)
  }

  return (
    <>
      <div className="w-full absolute mt-72 sm:px-24 lg:px-56">
        <HistoryBet resultBet={resultBet} clearBet={clearBet} />
      </div>
      <div className="bg-gray-800 h-screen text-white">
        <div className="bg-green-800 h-80 text-white pt-5 sm:px-24 lg:px-56">
          <div className="grid lg:grid-cols-5 sm:grid-cols-6 gap-4">
            <ResultBet resultValue={resultValue} betValue={betValue} />
            <PlayerBet betValue={betValue} resultValue={resultValue} />
          </div>
        </div>
        <PadBet selectBet={selectBet} statusClear={statusClear} betValue={betValue} statusRandom={statusRandom} />
      </div>
    </>
  );
}

export default App;
