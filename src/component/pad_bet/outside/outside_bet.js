import React from 'react'

const OutsideBet = ({ chooseBet, imageChip, outSideBet, statusRandom }) => {
    return (
        <div className="grid grid-cols-6 mt-1 gap-1">
            <button disabled={outSideBet.small === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="SMALL"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>ต่ำ 1-18
                        <div className="absolute" hidden={outSideBet.small === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outSideBet.even === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="EVEN"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>คู่
                        <div className="absolute" hidden={outSideBet.even === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outSideBet.red === false || statusRandom === true ? true : false} className="border-2 border-red-800 bg-red-900 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="RED"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>แดง
                        <div className="absolute" hidden={outSideBet.red === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outSideBet.black === false || statusRandom === true ? true : false} className="border-2 border-gray-700 bg-gray-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="BLACK"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>ดำ
                        <div className="absolute" hidden={outSideBet.black === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outSideBet.high === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="HIGH"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>สูง 19-36
                        <div className="absolute" hidden={outSideBet.high === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outSideBet.ood === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="OOD"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>คี่
                        <div className="absolute" hidden={outSideBet.ood === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
        </div>
    )
}

export default OutsideBet