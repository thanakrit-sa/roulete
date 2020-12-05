import React, { useState } from 'react'

const Pad_Bet = ({ click_bet, click_bet_Half }) => {

    const [data_top, setTop] = useState([])
    const [data_middle, setMiddle] = useState([])
    const [data_bottom, setBottom] = useState([])
    const [out_bet, setOutBet] = useState({
        dozen_1: true,
        dozen_2: true,
        dozen_3: true,
        colume_1: true,
        colume_2: true,
        colume_3: true,
        small: true,
        high: true,
        red: true,
        black: true,
        ood: true,
        even: true,
    })
    const [in_bet, setInBet] = useState({})

    if (data_top.length === 0) {
        for (let index = 3; index <= 36; index++) {
            if (index % 3 === 0) {
                const data = {
                    num: index,
                    class: index === 3 || index === 9 || index === 12 || index === 18 || index === 21 || index === 27 || index === 30 || index === 36 ?
                        "border-red-800 bg-red-900"
                        :
                        "border-gray-700 bg-gray-800"
                }
                data_top.push(data)
            }
        }
    }
    if (data_middle.length === 0) {
        let index = 2
        while (index <= 35) {
            const data = {
                num: index,
                class: index === 5 || index === 14 || index === 23 || index === 32 ?
                    "border-red-800 bg-red-900"
                    :
                    "border-gray-700 bg-gray-800"
            }
            data_middle.push(data)
            index = index + 3
        }
    }
    if (data_bottom.length === 0) {
        let index = 1
        while (index <= 34) {
            const data = {
                num: index,
                class: index === 1 || index === 7 || index === 16 || index === 19 || index === 25 || index === 34 ?
                    "border-red-800 bg-red-900"
                    :
                    "border-gray-700 bg-gray-800"
            }
            data_bottom.push(data)
            index = index + 3
        }
    }

    const select_bet = (value_type, value_bet) => {
        const data = {
            type: value_type,
            value: value_bet
        }
        click_bet(data)

        if (value_type === "DOZEN" && value_bet === "1st") {
            setOutBet({
                ...out_bet,
                dozen_1: false,
            })
        } else if (value_type === "DOZEN" && value_bet === "2nd") {
            setOutBet({
                ...out_bet,
                dozen_2: false,
            })
        } else if (value_type === "DOZEN" && value_bet === "3rd") {
            setOutBet({
                ...out_bet,
                dozen_3: false,
            })
        } else if (value_type === "COLUME" && value_bet === "1st") {
            setOutBet({
                ...out_bet,
                colume_1: false,
            })
        } else if (value_type === "COLUME" && value_bet === "2nd") {
            setOutBet({
                ...out_bet,
                colume_2: false,
            })
        } else if (value_type === "COLUME" && value_bet === "3rd") {
            setOutBet({
                ...out_bet,
                colume_3: false,
            })
        } else if (value_type === "HALF" && value_bet === "SMALL") {
            setOutBet({
                ...out_bet,
                small: false,
            })
        } else if (value_type === "HALF" && value_bet === "HIGH") {
            setOutBet({
                ...out_bet,
                high: false,
            })
        } else if (value_type === "HALF" && value_bet === "RED") {
            setOutBet({
                ...out_bet,
                red: false,
            })
        } else if (value_type === "HALF" && value_bet === "BLACK") {
            setOutBet({
                ...out_bet,
                black: false,
            })
        } else if (value_type === "HALF" && value_bet === "OOD") {
            setOutBet({
                ...out_bet,
                ood: false,
            })
        } else if (value_type === "HALF" && value_bet === "EVEN") {
            setOutBet({
                ...out_bet,
                even: false,
            })
        } else if (value_type === "STRIGHTUP") {
            setInBet({
                ...in_bet,
                [`in_bet_${value_bet}`]: true,
            })
        }

    }

    return (<div className="px-28 mt-14">
        <div class="grid grid-cols-12 gap-1">
            <div className="grid grid-rows-5">
                <div className="row-span-3 flex justify-end">
                    <button className="border-2 border-green-700 bg-green-800 w-20 h-full rounded-lg flex justify-center items-center">0</button>
                </div>
            </div>
            <div className="col-span-10">
                <div className="grid grid-cols-12 gap-1">
                    {data_top.map((item, i) =>
                        <button key={i} className={"border-2 w-20 h-20 rounded-lg flex justify-center items-center " + item.class} id={item.num} name="STRIGHTUP" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>{item.num}
                            <div className="absolute" hidden={in_bet[`in_bet_${item.num}`] === true ? false : true}>
                                <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                    <label className="text-xs mt-1">10</label>
                                </div>
                            </div>
                        </button>
                    )}
                    {data_middle.map((item, i) =>
                        <button key={i} className={"border-2 w-20 h-20 rounded-lg flex justify-center items-center " + item.class} id={item.num} name="STRIGHTUP" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>{item.num}
                            <div className="absolute" hidden={in_bet[`in_bet_${item.num}`] === true ? false : true}>
                                <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                    <label className="text-xs mt-1">10</label>
                                </div>
                            </div>
                        </button>
                    )}
                    {data_bottom.map((item, i) =>
                        <button key={i} className={"border-2 w-20 h-20 rounded-lg flex justify-center items-center " + item.class} id={item.num} name="STRIGHTUP" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>{item.num}
                            <div className="absolute" hidden={in_bet[`in_bet_${item.num}`] === true ? false : true}>
                                <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                    <label className="text-xs mt-1">10</label>
                                </div>
                            </div>
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-3 mt-1 gap-1">
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center" name="DOZEN" id="1st" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>โซน 1-12
                        <div className="absolute" hidden={out_bet.dozen_1}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center" name="DOZEN" id="2nd" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>โซน 13-24
                        <div className="absolute" hidden={out_bet.dozen_2}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center" name="DOZEN" id="3rd" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>โซน 25-36
                        <div className="absolute" hidden={out_bet.dozen_3}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="grid grid-cols-6 mt-1 gap-1">
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center" name="HALF" id="SMALL" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>ต่ำ 1-18
                        <div className="absolute" hidden={out_bet.small}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center" name="HALF" id="EVEN" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>คู่
                        <div className="absolute" hidden={out_bet.even}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-red-800 bg-red-900 w-full h-20 rounded-lg flex justify-center items-center" name="HALF" id="RED" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>แดง
                        <div className="absolute" hidden={out_bet.red}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-gray-700 bg-gray-800 w-full h-20 rounded-lg flex justify-center items-center" name="HALF" id="BLACK" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>ดำ
                        <div className="absolute" hidden={out_bet.black}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center" name="HALF" id="HIGH" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>สูง 19-36
                        <div className="absolute" hidden={out_bet.high}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-800 w-full h-20 rounded-lg flex justify-center items-center" name="HALF" id="OOD" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>คี่
                        <div className="absolute" hidden={out_bet.ood}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div>
                <div class="grid grid-rows-3 grid-flow-col gap-1">
                    <button className="border-2 border-green-700 bg-green-800 w-20 h-20 rounded-lg flex justify-center items-center" name="COLUME" id="3rd" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>2:1
                        <div className="absolute" hidden={out_bet.colume_3}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-800 w-20 h-20 rounded-lg flex justify-center items-center" name="COLUME" id="2nd" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>2:1
                        <div className="absolute" hidden={out_bet.colume_2}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                    <button className="border-2 border-green-700 bg-green-800 w-20 h-20 rounded-lg flex justify-center items-center" name="COLUME" id="1st" onClick={(e) => { select_bet(e.target.name, e.target.id) }}>2:1
                        <div className="absolute" hidden={out_bet.colume_1}>
                            <div className="bg-yellow-600 w-10 h-10 border-4 border-purple-900 rounded-full shadow-lg">
                                <label className="text-xs mt-1">10</label>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}

export default Pad_Bet