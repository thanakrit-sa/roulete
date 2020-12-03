import React, { useState } from 'react'

const Player_Bet = ({bet_value}) => {

    console.log(bet_value);

    return (<>
        <div className="col-span-2">
            <label>Player BET KEYS</label>
            <hr className="my-3" />
            <div className="grid grid-rows-6 grid-flow-col gap-1 overflow-x-scroll">
                <div className="bg-gray-800 p-3 m-0 w-40"></div>
            </div>
        </div>
    </>)
}

export default Player_Bet