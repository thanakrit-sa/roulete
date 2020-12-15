import React from 'react'

const ColumeBet = ({ selectBet, logo, outBet, statusRandom }) => {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-1">
            <button disabled={outBet.colume3 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUME" id="3rd"
                onClick={(e) => { selectBet(e.target.name, e.target.id) }}>
                2:1
                <div className="absolute" hidden={outBet.colume3}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outBet.colume2 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUME" id="2nd"
                onClick={(e) => { selectBet(e.target.name, e.target.id) }}>
                2:1
                <div className="absolute" hidden={outBet.colume2}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outBet.colume1 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUME" id="1st"
                onClick={(e) => { selectBet(e.target.name, e.target.id) }}>
                2:1
                <div className="absolute" hidden={outBet.colume1}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
        </div>
    )
}

export default ColumeBet