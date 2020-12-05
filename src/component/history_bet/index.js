import React, { useState } from 'react'

const History_Bet = ({ result_bet, clear_bet, bet_value }) => {

    const [result_data, setResultData] = useState([])
    const [status_btn, setStatusBtn] = useState(true)
    const [history, setHistory] = useState([])

    const random = () => {

        var num_count = 36;
        var half_count = 2;
        var straight_value = Math.floor((Math.random() * num_count) + 1);
        var half_red_black_value = Math.floor((Math.random() * half_count) + 1);
        var half_high_low_value = Math.floor((Math.random() * half_count) + 1);
        var half_ood_even_value = Math.floor((Math.random() * half_count) + 1);
        const arr_straight = {
            type: "STRAIGHTUP",
            value: straight_value.toString(),
            class: straight_value === 1 || straight_value === 3 || straight_value === 5 || straight_value === 7
                || straight_value === 9 || straight_value === 12 || straight_value === 14 || straight_value === 16
                || straight_value === 18 || straight_value === 19 || straight_value === 21 || straight_value === 23
                || straight_value === 25 || straight_value === 27 || straight_value === 30 || straight_value === 32
                || straight_value === 34 || straight_value === 36 ?
                "border-red-800 bg-red-900" : "border-gray-700 bg-gray-800"
        }
        const arr_red_black = {
            type: "HALF",
            value: half_red_black_value === 1 ? "RED" : "BLACK",
            class: "border-green-800 bg-green-900"
        }
        const arr_high_low = {
            type: "HALF",
            value: half_high_low_value === 1 ? "HIGH" : "SMALL",
            class: "border-green-800 bg-green-900"
        }
        const arr_ood_even = {
            type: "HALF",
            value: half_ood_even_value === 1 ? "OOD" : "EVEN",
            class: "border-green-800 bg-green-900"
        }
        result_data.push(arr_straight)
        result_data.push(arr_red_black)
        result_data.push(arr_high_low)
        result_data.push(arr_ood_even)
        for (let index_1 = 3; index_1 <= 36; index_1++) {
            if (index_1 % 3 === 0) {
                if (index_1 === straight_value) {
                    const arr_colume = {
                        type: "COLUME",
                        value: "3rd",
                        class: "border-green-800 bg-green-900"
                    }
                    result_data.push(arr_colume)
                }
            }
        }
        let index_2 = 2
        while (index_2 <= 35) {
            if (index_2 === straight_value) {
                const arr_colume = {
                    type: "COLUME",
                    value: "2nd",
                    class: "border-green-800 bg-green-900"
                }
                result_data.push(arr_colume)
            }
            index_2 = index_2 + 3
        }
        let index_3 = 1
        while (index_3 <= 34) {
            if (index_3 === straight_value) {
                const arr_colume = {
                    type: "COLUME",
                    value: "1st",
                    class: "border-green-800 bg-green-900"
                }
                result_data.push(arr_colume)
            }
            index_3 = index_3 + 3
        }
        let index_4 = 1
        while (index_4 <= 12) {
            if (index_4 === straight_value) {
                const arr_dozen = {
                    type: "DOZEN",
                    value: "1st",
                    class: "border-green-800 bg-green-900"
                }
                result_data.push(arr_dozen)
            }
            index_4 = index_4 + 1
        }
        let index_5 = 13
        while (index_5 <= 24) {
            if (index_5 === straight_value) {
                const arr_dozen = {
                    type: "DOZEN",
                    value: "2nd",
                    class: "border-green-800 bg-green-900"
                }
                result_data.push(arr_dozen)
            }
            index_5 = index_5 + 1
        }
        let index_6 = 25
        while (index_6 <= 36) {
            if (index_6 === straight_value) {
                const arr_dozen = {
                    type: "DOZEN",
                    value: "3rd",
                    class: "border-green-800 bg-green-900"
                }
                result_data.push(arr_dozen)
            }
            index_6 = index_6 + 1
        }
        result_bet(result_data)
        setHistory(result_data)
        setStatusBtn(false)
    }

    const clear = () => {
        setStatusBtn(true)
        setResultData([])
        clear_bet()
        console.log(result_data);
    }

    return (<>
        <div className="bg-gray-800 shadow-lg w-full inline-block rounded">
            <div className="grid grid-cols-3">
                <div className="col-span-2 flex items-center px-3 overflow-x-scroll">
                    {history.map((item, i) =>
                        <div className={"border-2 text-white h-6 mr-1 px-2 rounded-lg flex justify-center items-center text-xs " + item.class} key={i}>
                            {item.type === "DOZEN" || item.type === "COLUME" ? item.type + "x" + item.value : item.value}
                        </div>
                    )}
                </div>
                <div className="flex justify-end">
                    <button className="py-2 px-7 text-white m-3 w-32 rounded-full bg-blue-600" hidden={status_btn === true ? false : true} onClick={() => { random() }}>
                        หมุนรางวัล
                    </button>
                    <button className="py-2 px-7 text-white m-3 w-32 rounded-full bg-red-700" hidden={status_btn === true ? true : false} onClick={() => { clear() }}>
                        เริ่มใหม่
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default History_Bet