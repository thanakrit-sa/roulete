import React, { useState } from 'react'

const History_Bet = ({result_bet,clear_bet}) => {

    const [result_data, setResultData] = useState([])
    const [status_btn, setStatusBtn] = useState(true)

    const random = () => {

        var num_count = 36;
        var half_count = 2;
        var straight_value = Math.floor((Math.random() * num_count) + 1);
        var half_red_black_value = Math.floor((Math.random() * half_count) + 1);
        var half_high_low_value = Math.floor((Math.random() * half_count) + 1);
        var half_ood_even_value = Math.floor((Math.random() * half_count) + 1);
        const arr_straight = {
            type: "STRAIGHTUP",
            value: straight_value
        }
        const arr_red_black = {
            type: "HALF",
            value: half_red_black_value === 1 ? "RED" : "BLACK"
        }
        const arr_high_low = {
            type: "HALF",
            value: half_high_low_value === 1 ? "HIGH" : "LOW"
        }
        const arr_ood_even = {
            type: "HALF",
            value: half_ood_even_value === 1 ? "OOD" : "EVEN"
        }
        result_data.push(arr_straight)
        result_data.push(arr_red_black)
        result_data.push(arr_high_low)
        result_data.push(arr_ood_even)
        result_bet(result_data,status)
        setStatusBtn(false)
    }

    return (<>
        <div className="bg-gray-800 shadow-lg w-full inline-block rounded">
            <div className="grid grid-cols-3">
                <div className="col-span-2 flex items-center px-3">
                    <div className="border-2 text-white border-red-800 bg-red-900 w-10 h-10 mr-1 rounded-lg flex justify-center items-center">1</div>
                    <div className="border-2 text-white border-gray-700 bg-gray-800 w-10 h-10 mr-1 rounded-lg flex justify-center items-center">1</div>
                </div>
                <div className="flex justify-end">
                    <button className="py-2 px-7 text-white m-3 w-32 rounded-full bg-blue-600" hidden={status_btn === true ? false : true} onClick={() => { random() }}>
                        หมุนรางวัล
                    </button>
                    <button className="py-2 px-7 text-white m-3 w-32 rounded-full bg-red-700" hidden={status_btn === true ? true : false} onClick={() => { clear_bet() }}>
                        เริ่มใหม่
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default History_Bet