import React from 'react'
import ImageChipCursor from '../../../chipCursor.png'


const ColumnBet = ({ chooseBet, imageChip, outSideBet, statusRandom }) => {
    return (
        <div className="grid grid-rows-3 grid-flow-col gap-1">
            <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={outSideBet.COLUMN3rd === false || statusRandom === true ? true : false}
                className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUMN" id="3rd"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>
                2:1
                <div className="absolute" hidden={outSideBet.COLUMN3rd === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={outSideBet.COLUMN2nd === false || statusRandom === true ? true : false}
                className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUMN" id="2nd"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>
                2:1
                <div className="absolute" hidden={outSideBet.COLUMN2nd === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={outSideBet.COLUMN1st === false || statusRandom === true ? true : false}
                className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUMN" id="1st"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>
                2:1
                <div className="absolute" hidden={outSideBet.COLUMN1st === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
        </div>
    )
}

export default ColumnBet