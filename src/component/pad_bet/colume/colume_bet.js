import React from 'react'

const ColumeBet = ({ chooseBet, imageChip, outSideBet, statusRandom }) => {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-1">
            <button disabled={outSideBet.colume3 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUME" id="3rd"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>
                2:1
                <div className="absolute" hidden={outSideBet.colume3 === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outSideBet.colume2 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUME" id="2nd"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>
                2:1
                <div className="absolute" hidden={outSideBet.colume2 === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outSideBet.colume1 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUME" id="1st"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>
                2:1
                <div className="absolute" hidden={outSideBet.colume1 === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
        </div>
    )
}

export default ColumeBet