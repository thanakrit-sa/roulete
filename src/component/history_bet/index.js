import React, { useState } from 'react'

const History_Bet = ({ result_bet, clear_bet, bet_value }) => {

    const [result_data, setResultData] = useState([])
    const [status_btn, setStatusBtn] = useState(true)
    const [history, setHistory] = useState([])
    const [history_data, setHistoryData] = useState([])
    const [street_array_1, setStreetArray_1] = useState()
    const [street_array_2, setStreetArray_2] = useState()

    const random = () => {

        var num_count = 36;
        var half_count = 2;
        var split_count = 2;
        var group_count = 11;
        var split_count_group = 3;
        var group_top_arr = ["3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"];
        var group_middle_arr = ["2", "5", "8", "11", "14", "17", "20", "21", "26", "29", "32", "35"];
        var group_bottom_arr = ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"];
        var group_square_arr = ["5", "11", "17", "23", "29", "32"];
        var straight_value = Math.floor((Math.random() * num_count) + 1);
        var straight_value_1 = Math.floor((Math.random() * num_count) + 1);
        var straight_value_2 = Math.floor((Math.random() * num_count) + 1);
        var straight_value_3 = Math.floor((Math.random() * num_count) + 1);
        var half_red_black_value = Math.floor((Math.random() * half_count) + 1);
        var half_high_low_value = Math.floor((Math.random() * half_count) + 1);
        var half_ood_even_value = Math.floor((Math.random() * half_count) + 1);
        var split_value = Math.floor((Math.random() * split_count) + 1);
        var split_value_check = Math.floor((Math.random() * split_count) + 1);
        var split_group_1 = Math.floor((Math.random() * split_count_group) + 1);
        var split_group_2 = Math.floor((Math.random() * split_count_group) + 1);
        var split_group_3 = Math.floor((Math.random() * split_count_group) + 1);

        //@ out bet
        const arr_straight = {
            type: "STRAIGHTUP",
            value: straight_value.toString(),
        }
        const arr_red_black = {
            type: "HALF",
            value: half_red_black_value === 1 ? "RED" : "BLACK",
        }
        const arr_high_low = {
            type: "HALF",
            value: half_high_low_value === 1 ? "HIGH" : "SMALL",
        }
        const arr_ood_even = {
            type: "HALF",
            value: half_ood_even_value === 1 ? "OOD" : "EVEN",
        }
        result_data.push(arr_straight)
        result_data.push(arr_red_black)
        result_data.push(arr_high_low)
        result_data.push(arr_ood_even)
        history_data.push(straight_value)
        for (let index_1 = 3; index_1 <= 36; index_1++) {
            if (index_1 % 3 === 0) {
                if (index_1 === straight_value) {
                    const arr_colume = {
                        type: "COLUME",
                        value: "3rd",
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
                }
                result_data.push(arr_dozen)
            }
            index_6 = index_6 + 1
        }
        //@ end out bet 
        //@ split bet
        var split_value_1 = Math.floor((Math.random() * 11) + 1);
        var split_value_2 = Math.floor((Math.random() * 11) + 1);
        var split_value_3 = Math.floor((Math.random() * 11) + 1);
        let data_1 = null
        let data_2 = null
        let data_3 = null

        if (group_top_arr[split_value_1] === "3") {
            var split_value_check = Math.floor((Math.random() * 2) + 1);
            data_1 = split_value_check === 1 ? parseInt(group_top_arr[split_value_1]) + 3 : parseInt(group_top_arr[split_value_1]) - 1
        } else if (group_top_arr[split_value_1] === "36") {
            var split_value_check = Math.floor((Math.random() * 2) + 1);
            data_1 = split_value_check === 1 ? parseInt(group_top_arr[split_value_1]) - 3 : parseInt(group_top_arr[split_value_1]) - 1
        } else {
            var split_value_check = Math.floor((Math.random() * 3) + 1);
            if (split_value_check === 1) {
                data_1 = parseInt(group_top_arr[split_value_1]) + 3
            } else if (split_value_check === 2) {
                data_1 = parseInt(group_top_arr[split_value_1]) - 3
            } else {
                data_1 = parseInt(group_top_arr[split_value_1]) - 1
            }
        }
        if (group_middle_arr[split_value_2] === "2") {
            var split_value_check = Math.floor((Math.random() * 3) + 1);
            if (split_value_check === 1) {
                data_2 = parseInt(group_middle_arr[split_value_2]) + 3
            } else if (split_value_check === 2) {
                data_2 = parseInt(group_middle_arr[split_value_2]) + 1
            } else {
                data_2 = parseInt(group_middle_arr[split_value_2]) - 1
            }
        } else if (group_middle_arr[split_value_2] === "35") {
            var split_value_check = Math.floor((Math.random() * 3) + 1);
            if (split_value_check === 1) {
                data_2 = parseInt(group_middle_arr[split_value_2]) + 1
            } else if (split_value_check === 2) {
                data_2 = parseInt(group_middle_arr[split_value_2]) - 1
            } else {
                data_2 = parseInt(group_middle_arr[split_value_2]) - 3
            }
            data_2 = split_value_check === 1 ? parseInt(group_middle_arr[split_value_2]) + 3 : parseInt(group_middle_arr[split_value_2]) + 1
        } else {
            var split_value_check = Math.floor((Math.random() * 4) + 1);
            if (split_value_check === 1) {
                data_2 = parseInt(group_middle_arr[split_value_2]) + 3
            } else if (split_value_check === 2) {
                data_2 = parseInt(group_middle_arr[split_value_2]) - 3
            } else if (split_value_check === 3) {
                data_2 = parseInt(group_middle_arr[split_value_2]) + 1
            } else {
                data_2 = parseInt(group_middle_arr[split_value_2]) - 1
            }
        }
        if (group_bottom_arr[split_value_3] === "1") {
            var split_value_check = Math.floor((Math.random() * 2) + 1);
            data_3 = split_value_check === 1 ? parseInt(group_bottom_arr[split_value_3]) + 3 : parseInt(group_bottom_arr[split_value_3]) + 1
        } else if (group_bottom_arr[split_value_3] === "34") {
            var split_value_check = Math.floor((Math.random() * 2) + 1);
            data_3 = split_value_check === 1 ? parseInt(group_bottom_arr[split_value_3]) - 3 : parseInt(group_bottom_arr[split_value_3]) + 1
        } else {
            var split_value_check = Math.floor((Math.random() * 3) + 1);
            if (split_value_check === 1) {
                data_3 = parseInt(group_bottom_arr[split_value_3]) + 3
            } else if (split_value_check === 2) {
                data_3 = parseInt(group_bottom_arr[split_value_3]) - 3
            } else {
                data_3 = parseInt(group_bottom_arr[split_value_3]) + 1
            }
        }
        const arr_split_1 = {
            type: "SPLIT",
            value: [group_top_arr[split_value_1], data_1],
        }
        const arr_split_2 = {
            type: "SPLIT",
            value: [group_middle_arr[split_value_2], data_2],
        }
        const arr_split_3 = {
            type: "SPLIT",
            value: [group_bottom_arr[split_value_3], data_3],
        }
        result_data.push(arr_split_1, arr_split_2, arr_split_3)
        history_data.push(parseInt(group_top_arr[split_value_1]), parseInt(data_1), parseInt(group_middle_arr[split_value_2]), parseInt(data_2), parseInt(group_bottom_arr[split_value_3]), parseInt(data_3))
        //@ end split bet
        //@ street bet
        var street_value_1 = Math.floor((Math.random() * group_count) + 1);
        var street_value_2 = Math.floor((Math.random() * group_count) + 1);
        history_data.push(parseInt(group_bottom_arr[street_value_1]), parseInt(group_bottom_arr[street_value_1]) + 1, parseInt(group_bottom_arr[street_value_1]) + 2,
            parseInt(group_bottom_arr[street_value_2]), parseInt(group_bottom_arr[street_value_2]) + 1, parseInt(group_bottom_arr[street_value_2]) + 2
        )
        const arr_street_1 = {
            type: "STREET",
            value: [parseInt(group_bottom_arr[street_value_1]), parseInt(group_bottom_arr[street_value_1]) + 1, parseInt(group_bottom_arr[street_value_1]) + 2],
        }
        result_data.push(arr_street_1)
        const arr_street_2 = {
            type: "STREET",
            value: [parseInt(group_bottom_arr[street_value_2]), parseInt(group_bottom_arr[street_value_2]) + 1, parseInt(group_bottom_arr[street_value_2]) + 2],
        }
        result_data.push(arr_street_2)
        //@ end street bet
        //@ square bet
        var square_count = Math.floor((Math.random() * 5) + 1);
        let data_square = null
        var square_check = Math.floor((Math.random() * 4) + 1);
        if (square_check === 1) {
            data_square = [parseInt(group_square_arr[square_count]) - 4, parseInt(group_square_arr[square_count]) - 3, parseInt(group_square_arr[square_count]) - 1, parseInt(group_square_arr[square_count])]
        } else if (square_check === 2) {
            data_square = [parseInt(group_square_arr[square_count]) - 3, parseInt(group_square_arr[square_count]) - 2, parseInt(group_square_arr[square_count]), parseInt(group_square_arr[square_count]) + 1]
        } else if (square_check === 3) {
            data_square = [parseInt(group_square_arr[square_count]) - 1, parseInt(group_square_arr[square_count]), parseInt(group_square_arr[square_count]) + 2, parseInt(group_square_arr[square_count]) + 3]
        } else {
            data_square = [parseInt(group_square_arr[square_count]), parseInt(group_square_arr[square_count]) + 1, parseInt(group_square_arr[square_count]) + 3, parseInt(group_square_arr[square_count]) + 4]
        }
        const arr_square = {
            type: "SQUARE",
            value: data_square,
        }
        result_data.push(arr_square)
        history_data.push(parseInt(group_square_arr[square_count]), parseInt(group_square_arr[square_count]) - 4, parseInt(group_square_arr[square_count]) - 3, parseInt(group_square_arr[square_count]) - 1,
            parseInt(group_square_arr[square_count]) - 2, parseInt(group_square_arr[square_count]) + 2, parseInt(group_square_arr[square_count]) + 3, parseInt(group_square_arr[square_count]) + 4)
        //@ end square bet
        //@ line bet
        var line_count = Math.floor((Math.random() * 11) + 1);
        if (group_bottom_arr[line_count] === "10" || group_bottom_arr[line_count] === "22" || group_bottom_arr[line_count] === "34") {
        } else {
            const arr_line = {
                type: "LINE",
                value: [parseInt(group_bottom_arr[line_count]), parseInt(group_bottom_arr[line_count]) + 1, parseInt(group_bottom_arr[line_count]) + 2, parseInt(group_bottom_arr[line_count]) + 3, parseInt(group_bottom_arr[line_count]) + 4, parseInt(group_bottom_arr[line_count]) + 5],
            }
            result_data.push(arr_line)
            history_data.push(parseInt(group_bottom_arr[line_count]), parseInt(group_bottom_arr[line_count]) + 1, parseInt(group_bottom_arr[line_count]) + 2,
                parseInt(group_bottom_arr[line_count]) + 3, parseInt(group_bottom_arr[line_count]) + 4, parseInt(group_bottom_arr[line_count]) + 5
            )
        }
        //@ end line bet
        result_bet(result_data, true)
        const data_history = [...new Set(history_data)]
        let mock_data_history = []
        data_history.map(item => {
            const data = {
                value: item,
                class: item === 1 || item === 3 || item === 5 || item === 7 || item === 9 || item === 12 || item === 14 || item === 16 || item === 18
                    || item === 19 || item === 21 || item === 23 || item === 25 || item === 27 || item === 30 || item === 32 || item === 34 || item === 36 ?
                    "bg-red-900 border-2 border-red-800" : "bg-gray-800 border-2 border-gray-700"
            }
            mock_data_history.push(data)
        })
        console.log(mock_data_history);
        setHistory(mock_data_history)
        setStatusBtn(false)

    }

    const clear = () => {
        setStatusBtn(true)
        setResultData([])
        clear_bet()
        setStreetArray_1([])
        setStreetArray_2([])
        setHistoryData([])
    }

    return (<>
        <div className="bg-gray-800 shadow-lg w-full inline-block rounded">
            <div className="grid grid-cols-6">
                <div className="col-span-5 flex items-center px-3 w-full overflow-x-scroll">
                    {history.map((item, i) =>
                        <div className={"border-2 text-white h-6 mr-1 px-2 w-10 h-10 rounded-lg flex justify-center items-center text-xs " + item.class} key={i}>
                            {item.value}
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