import React from 'react'

const OutsideBet = ({ selectBet, logo, outBet, statusRandom }) => {
    return (
        <div className="grid grid-cols-6 mt-1 gap-1">
            <button disabled={outBet.small === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="SMALL" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>ต่ำ 1-18
                        <div className="absolute" hidden={outBet.small}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outBet.even === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="EVEN" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>คู่
                        <div className="absolute" hidden={outBet.even}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outBet.red === false || statusRandom === true ? true : false} className="border-2 border-red-800 bg-red-900 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="RED" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>แดง
                        <div className="absolute" hidden={outBet.red}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outBet.black === false || statusRandom === true ? true : false} className="border-2 border-gray-700 bg-gray-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="BLACK" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>ดำ
                        <div className="absolute" hidden={outBet.black}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outBet.high === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="HIGH" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>สูง 19-36
                        <div className="absolute" hidden={outBet.high}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outBet.ood === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="OOD" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>คี่
                        <div className="absolute" hidden={outBet.ood}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
        </div>
    )
}

export default OutsideBet