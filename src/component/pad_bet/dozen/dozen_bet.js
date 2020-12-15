import React from 'react'

const DozenBet = ({selectBet,logo,outBet,statusRandom}) => {
    return (
        <div className="grid grid-cols-3 mt-1 gap-1">
            <button disabled={outBet.dozen1 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="DOZEN" id="1st"
                onClick={(e) => { selectBet(e.target.name, e.target.id) }}>โซน 1-12
                        <div className="absolute" hidden={outBet.dozen1}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outBet.dozen2 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="DOZEN" id="2nd"
                onClick={(e) => { selectBet(e.target.name, e.target.id) }}>โซน 13-24
                        <div className="absolute" hidden={outBet.dozen2}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
            <button disabled={outBet.dozen3 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="DOZEN" id="3rd"
                onClick={(e) => { selectBet(e.target.name, e.target.id) }}>โซน 25-36
                        <div className="absolute" hidden={outBet.dozen3}>
                    <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                </div>
            </button>
        </div>
    )
}

export default DozenBet