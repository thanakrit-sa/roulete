import React from 'react'

const DozenBet = ({ chooseBet, imageChip, outSideBet, statusRandom }) => {
    return (
        <div className="grid grid-cols-3 mt-1 gap-1">
            <button style={{ outline: '0', cursor: 'pointer' }} disabled={outSideBet.DOZEN1st === false || statusRandom === true ? true : false}
                className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="DOZEN" id="1st"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>โซน 1-12
                        <div className="absolute" hidden={outSideBet.DOZEN1st === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button style={{ outline: '0', cursor: 'pointer' }} disabled={outSideBet.DOZEN2nd === false || statusRandom === true ? true : false}
                className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="DOZEN" id="2nd"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>โซน 13-24
                        <div className="absolute" hidden={outSideBet.DOZEN2nd === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button style={{ outline: '0', cursor: 'pointer' }} disabled={outSideBet.DOZEN3rd === false || statusRandom === true ? true : false}
                className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="DOZEN" id="3rd"
                onClick={(e) => { chooseBet(e.target.name, e.target.id) }}>โซน 25-36
                        <div className="absolute" hidden={outSideBet.DOZEN3rd === false ? false : true}>
                    <img src={imageChip} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
        </div>
    )
}

export default DozenBet