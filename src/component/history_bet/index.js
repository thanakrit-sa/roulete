import React, { useState } from 'react'

const History_Bet = () => {

    const [result_data, setResultData] = useState([])
    const [data_split, setDataSplit] = useState([])

    const random = () => {

        var num_count = 36;

        var straight_value = Math.floor((Math.random() * num_count) + 1);
        const arr_straight = {
            type: "straight",
            value: straight_value
        }
        result_data.push(arr_straight)

        for (let index = 0; index < 6; index++) {
            var split_value = Math.floor((Math.random() * num_count) + 1);
            data_split.push(split_value)
        }
        const arr_split = {
            type: "split",
            value: data_split
        }
        result_data.push(arr_split)

        console.log(result_data);
    }

    return (<>
        <div className="bg-gray-800 shadow-lg w-full inline-block rounded">
            <div className="grid grid-cols-3">
                <div className="col-span-2 flex items-center px-3">
                    <div className="border-2 text-white border-red-800 bg-red-900 w-10 h-10 mr-1 rounded-lg flex justify-center items-center">1</div>
                    <div className="border-2 text-white border-gray-700 bg-gray-800 w-10 h-10 mr-1 rounded-lg flex justify-center items-center">1</div>
                </div>
                <div className="flex justify-end">
                    <button className="py-2 px-7 text-white m-3 rounded-full bg-blue-600" onClick={() => { random() }}>
                        หมุนรางวัล
              </button>
                </div>
            </div>
        </div>
    </>)
}

export default History_Bet