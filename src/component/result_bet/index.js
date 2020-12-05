import React from 'react'

const Result_Bet = ({ result_data,bet_value }) => {

    result_data.map(item => {
        item['class'] = ""
        bet_value.filter((filter) => (filter.type === item.type && filter.value === item.value)).map(data => {
            item['class'] = "text-green-600"
        })
    })

    return (<>
        <div>
            <label>Last Result BET KEYS</label>
            <hr className="my-3" />
            <div className="grid grid-cols-2 gap-1 text-center">
                {result_data.map((item, i) =>
                    <div className={"bg-gray-800 px-3 py-1 m-0 text-xs " + item.class}>{item.type + "x" + item.value}</div>
                )}
            </div>
        </div>
    </>)
}

export default Result_Bet