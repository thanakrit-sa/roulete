import React, { useState } from 'react'

const Result_Bet = ({ result_data, bet_value }) => {

    const [result, setResult] = useState()

    console.log(result_data);
    console.log(bet_value);

    result_data.map(item => {
        item['class_result'] = ""
        item['result'] = item.type + "x" + item.value
        bet_value.filter((filter) => (filter.type === item.type && filter.value === item.value)).map(data => {
            item['class_result'] = "text-green-600"
        })
    })

    return (<>
        <div className="lg:col-span-2 sm:col-span-3">
            <label>Last Result BET KEYS</label>
            <hr className="my-3" />
            <div className="grid grid-cols-2 gap-1 text-center">
                {result_data.map((item, i) =>
                    <div className={"bg-gray-800 px-3 py-1 m-0 text-xs " + item.class_result}>{item.result}</div>
                )}
            </div>
        </div>
    </>)
}

export default Result_Bet