import React from 'react'

const Player_Bet = ({ bet_value,result_data }) => {

    result_data.map(item => {
        bet_value.filter((filter) => (filter.type === item.type && filter.value === item.value)).map(data => {
            data['class'] = "text-green-600"
        })
    })

    return (<>
        <div className="lg:col-span-3 sm:col-span-3">
            <label>Player BET KEYS</label>
            <hr className="my-3" />
            <div className="grid grid-rows-6 grid-flow-col gap-1 overflow-x-scroll text-center">
                {bet_value.map((item, i) =>
                    <div key={i} className={"bg-gray-800 px-3 py-1 m-0 w-48 text-xs " + item.class}>{item.type + "x" + item.value}</div>
                )}
            </div>
        </div>
    </>)
}

export default Player_Bet