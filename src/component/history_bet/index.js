import React, { useState } from 'react'

const HistoryBet = ({ resultBet, clearBet }) => {

    const [resultData, setResultData] = useState([])
    const [statusBtn, setStatusBtn] = useState(true)
    const [history, setHistory] = useState([])
    const [historyData] = useState([])

    const random = () => {

        let groupTopVertical = ["3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"];
        let groupMiddleVertical = ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"];
        let groupBottomVertical = ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"];
        let groupZoneFirst = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        let groupZoneSecond = ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
        let groupZonethird = ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36"];

        let numCount = 36;
        let straightValue = Math.floor((Math.random() * numCount));
        const arrStraight = {
            type: "STRAIGHTUP",
            value: straightValue.toString(),
        }
        resultData.push(arrStraight)
        historyData.splice(0, 0, straightValue)

        if (straightValue === 0) {
            let streetRandomValue = Math.floor((Math.random() * 3) + 1);
            if (streetRandomValue === 1) {
                const arrStreet = {
                    type: "STREET",
                    value: (0 + "-" + 1 + "-" + 2).toString()
                }
                resultData.push(arrStreet)
            } else if (streetRandomValue === 2) {
                const arrStreet = {
                    type: "STREET",
                    value: (0 + "-" + 2 + "-" + 3).toString()
                }
                resultData.push(arrStreet)
            } else {
                const arrStreet = {
                    type: "STREET",
                    value: (0 + "-" + 3 + "-" + 2).toString()
                }
                resultData.push(arrStreet)
            }
            const splitFirst = {
                type: "SPLIT",
                value: (0 + "-" + 1).toString()
            }
            const splitSecond = {
                type: "SPLIT",
                value: (0 + "-" + 2).toString()
            }
            const splitThird = {
                type: "SPLIT",
                value: (0 + "-" + 3).toString()
            }
            const arrBasket = {
                type: "BASKET",
                value: (0 + "-" + 1 + "-" + 2 + "-" + 3).toString()
            }
            resultData.push(splitFirst, splitSecond, splitThird, arrBasket)
            resultBet(resultData, true)
            setHistory([...history, historyData])
            setStatusBtn(false)
        } else {
            //@ half bet
            const arrRedBlack = {
                type: "HALF",
                value: straightValue === 1 || straightValue === 3 || straightValue === 5 || straightValue === 7 || straightValue === 9 || straightValue === 12 || straightValue === 14 || straightValue === 16 || straightValue === 18
                    || straightValue === 19 || straightValue === 21 || straightValue === 23 || straightValue === 25 || straightValue === 27 || straightValue === 30 || straightValue === 32 || straightValue === 34 || straightValue === 36 ?
                    "RED" : "BLACK",
            }
            const arrHighLow = {
                type: "HALF",
                value: straightValue > 18 ? "HIGH" : "SMALL",
            }
            const arrOodEven = {
                type: "HALF",
                value: straightValue % 2 === 0 ? "EVEN" : "OOD",
            }
            resultData.push(arrRedBlack, arrHighLow, arrOodEven)
            //@ end half bet
            //@ dozen bet
            groupZoneFirst.filter((filter) => (filter === straightValue.toString())).map(item => {
                const dataDozen = {
                    type: "DOZEN",
                    value: "1st",
                }
                return resultData.push(dataDozen)
            })
            groupZoneSecond.filter((filter) => (filter === straightValue.toString())).map(item => {
                const dataDozen = {
                    type: "DOZEN",
                    value: "2nd",
                }
                return resultData.push(dataDozen)
            })
            groupZonethird.filter((filter) => (filter === straightValue.toString())).map(item => {
                const dataDozen = {
                    type: "DOZEN",
                    value: "3rd",
                }
                return resultData.push(dataDozen)
            })
            //@ end dozen bet
            //@ top vertical bet
            groupTopVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
                const dataColumn = {
                    type: "COLUMN",
                    value: "3rd",
                }
                if (item === "36") {
                    const splitFirst = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 3) + "-" + item).toString()
                    }
                    const splitSecond = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 1) + "-" + item).toString()
                    }
                    resultData.push(splitFirst, splitSecond)
                } else if (item === "3" || straightValue === 0) {
                    let streetRandomValue = Math.floor((Math.random() * 3) + 1);
                    if (streetRandomValue === 1) {
                        const arrStreet = {
                            type: "STREET",
                            value: (0 + "-" + 1 + "-" + 2).toString()
                        }
                        resultData.push(arrStreet)
                    } else if (streetRandomValue === 2) {
                        const arrStreet = {
                            type: "STREET",
                            value: (0 + "-" + 2 + "-" + 3).toString()
                        }
                        resultData.push(arrStreet)
                    } else {
                        const arrStreet = {
                            type: "STREET",
                            value: (0 + "-" + 3 + "-" + 2).toString()
                        }
                        resultData.push(arrStreet)
                    }
                    const splitFirst = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 3)).toString()
                    }
                    const splitSecond = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 3) + "-" + item).toString()
                    }
                    const splitThird = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 1) + "-" + item).toString()
                    }
                    const arrBasket = {
                        type: "BASKET",
                        value: (0 + "-" + 1 + "-" + 2 + "-" + 3).toString()
                    }
                    resultData.push(splitFirst, splitSecond, splitThird, arrBasket)
                } else {
                    const splitFirst = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 3)).toString()
                    }
                    const splitSecond = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 3) + "-" + item).toString()
                    }
                    const splitThird = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 1) + "-" + item).toString()
                    }
                    resultData.push(splitFirst, splitSecond, splitThird)
                }
                const arrStreet = {
                    type: "STREET",
                    value: ((parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item).toString()
                }
                const arrLine = {
                    type: "LINE",
                    value: item === "36" ?
                        ((parseInt(item) - 5) + "-" + (parseInt(item) - 4) + "-" + (parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item).toString()
                        :
                        ((parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3)).toString()
                }
                const arrSquare = {
                    type: "SQUARE",
                    value: item === "36" ?
                        ((parseInt(item) - 4) + "-" + (parseInt(item) - 3) + "-" + (parseInt(item) - 1) + "-" + item).toString()
                        :
                        ((parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3)).toString()
                }
                return resultData.push(dataColumn, arrStreet, arrSquare, arrLine)
            })
            //@ end top vertical bet
            //@ middle vertical bet
            groupMiddleVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
                const dataColumn = {
                    type: "COLUMN",
                    value: "2nd",
                }
                if (item === "35") {
                    const splitFirst = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 3) + "-" + item).toString()
                    }
                    const splitSecond = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 1) + "-" + item).toString()
                    }
                    const splitThird = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 1)).toString()
                    }
                    resultData.push(splitFirst, splitSecond, splitThird)
                } else if (item === "2") {
                    let streetRandomValue = Math.floor((Math.random() * 3) + 1);
                    if (streetRandomValue === 1) {
                        const arrStreet = {
                            type: "STREET",
                            value: (0 + "-" + 1 + "-" + 2).toString()
                        }
                        resultData.push(arrStreet)
                    } else if (streetRandomValue === 2) {
                        const arrStreet = {
                            type: "STREET",
                            value: (0 + "-" + 2 + "-" + 3).toString()
                        }
                        resultData.push(arrStreet)
                    } else {
                        const arrStreet = {
                            type: "STREET",
                            value: (0 + "-" + 3 + "-" + 2).toString()
                        }
                        resultData.push(arrStreet)
                    }
                    const splitFirst = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 3)).toString()
                    }
                    const splitSecond = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 2) + "-" + item).toString()
                    }
                    const splitThird = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 1) + "-" + item).toString()
                    }
                    const splitFourth = {
                        type: "SPLIT",
                        value: ((parseInt(item) + 1) + "-" + item).toString()
                    }
                    const arrBasket = {
                        type: "BASKET",
                        value: (0 + "-" + 1 + "-" + 2 + "-" + 3).toString()
                    }
                    resultData.push(splitFirst, splitSecond, splitThird, splitFourth, arrBasket)
                } else {
                    const splitFirst = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 3)).toString()
                    }
                    const splitSecond = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 3) + "-" + item).toString()
                    }
                    const splitThird = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 1) + "-" + item).toString()
                    }
                    const splitFourth = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 1)).toString()
                    }
                    resultData.push(splitFirst, splitSecond, splitThird, splitFourth)
                }
                const arrStreet = {
                    type: "STREET",
                    value: ((parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1)).toString()
                }
                const arrLine = {
                    type: "LINE",
                    value: item === "35" ?
                        ((parseInt(item) - 4) + "-" + (parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1)).toString()
                        :
                        ((parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3) + "-" + (parseInt(item) + 4)).toString()
                }
                let lineCheck = Math.floor((Math.random() * 2) + 1);
                const arrSquare = {
                    type: "SQUARE",
                    value: item === "35" ?
                        lineCheck === 1 ?
                            ((parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + item + "-" + (parseInt(item) + 1)).toString() :
                            ((parseInt(item) - 4) + "-" + (parseInt(item) - 3) + "-" + (parseInt(item) - 1) + "-" + item).toString()
                        :
                        lineCheck === 1 ?
                            (item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 3) + "-" + (parseInt(item) + 4)).toString() :
                            ((parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3)).toString()
                }
                return resultData.push(dataColumn, arrStreet, arrSquare, arrLine)
            })
            //@ end middle vertical bet
            //@ bottom vertical bet
            groupBottomVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
                const dataColumn = {
                    type: "COLUMN",
                    value: "1st",
                }
                if (item === "34") {
                    const splitFirst = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 1)).toString()
                    }
                    const splitSecond = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 3) + "-" + item).toString()
                    }
                    resultData.push(splitFirst, splitSecond)
                } else if (item === "1") {
                    let streetRandomValue = Math.floor((Math.random() * 3) + 1);
                    if (streetRandomValue === 1) {
                        const arrStreet = {
                            type: "STREET",
                            value: (0 + "-" + 1 + "-" + 2).toString()
                        }
                        resultData.push(arrStreet)
                    } else if (streetRandomValue === 2) {
                        const arrStreet = {
                            type: "STREET",
                            value: (0 + "-" + 2 + "-" + 3).toString()
                        }
                        resultData.push(arrStreet)
                    } else {
                        const arrStreet = {
                            type: "STREET",
                            value: (0 + "-" + 3 + "-" + 2).toString()
                        }
                        resultData.push(arrStreet)
                    }
                    const splitFirst = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 1)).toString()
                    }
                    const splitSecond = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 3)).toString()
                    }
                    const splitThird = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 1) + "-" + item).toString()
                    }
                    const arrBasket = {
                        type: "BASKET",
                        value: (0 + "-" + 1 + "-" + 2 + "-" + 3).toString()
                    }
                    resultData.push(splitFirst, splitSecond, splitThird, arrBasket)
                } else {
                    const splitFirst = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 3)).toString()
                    }
                    const splitSecond = {
                        type: "SPLIT",
                        value: ((parseInt(item) - 3) + "-" + item).toString()
                    }
                    const splitThird = {
                        type: "SPLIT",
                        value: (item + "-" + (parseInt(item) + 1)).toString()
                    }
                    resultData.push(splitFirst, splitSecond, splitThird)
                }
                const arrStreet = {
                    type: "STREET",
                    value: (item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2)).toString()
                }
                const arrLine = {
                    type: "LINE",
                    value: item === "34" ?
                        ((parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2)).toString()
                        :
                        (item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3) + "-" + (parseInt(item) + 4) + "-" + (parseInt(item) + 5)).toString()
                }
                const arrSquare = {
                    type: "SQUARE",
                    value: item === "34" ?
                        ((parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + item + "-" + (parseInt(item) + 1)).toString()
                        :
                        (item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 3) + "-" + (parseInt(item) + 4)).toString()
                }
                return resultData.push(dataColumn, arrStreet, arrSquare, arrLine)
            })
            //@ end bottom vertical bet
            let mockDataHistory = []
            historyData.map(item => {
                if (item === 0) {
                    const data = {
                        value: item,
                        class: "bg-green-900 border-2 border-green-800"
                    }
                    return mockDataHistory.push(data)
                }
                const data = {
                    value: item,
                    class: item === 1 || item === 3 || item === 5 || item === 7 || item === 9 || item === 12 || item === 14 || item === 16 || item === 18
                        || item === 19 || item === 21 || item === 23 || item === 25 || item === 27 || item === 30 || item === 32 || item === 34 || item === 36 ?
                        "bg-red-900 border-2 border-red-800" : "bg-gray-800 border-2 border-gray-700"
                }
                return mockDataHistory.push(data)
            })
            resultBet(resultData, true)
            setHistory(mockDataHistory)
            setStatusBtn(false)
        }
    }

    const clear = () => {
        setStatusBtn(true)
        setResultData([])
        clearBet()
    }

    return (<>
        <div className="bg-gray-800 shadow-lg w-full inline-block rounded">
            <div className="grid grid-cols-6">
                <div className="col-span-5 flex items-center px-3 w-full overflow-x-scroll">
                    {history.map((item, i) =>
                        <div className={"border-2 text-white h-6 mr-1 px-5 w-10 h-10 rounded-lg flex justify-center items-center text-xs " + item.class} key={i}>
                            {item.value}
                        </div>
                    )}
                </div>
                <div className="flex justify-end">
                    <button className="py-2 px-7 text-white m-3 w-32 rounded-full bg-blue-600 sm:text-xs lg:text-base" hidden={statusBtn === true ? false : true} onClick={() => { random() }}>
                        หมุนรางวัล
                    </button>
                    <button className="py-2 px-7 text-white m-3 w-32 rounded-full bg-red-700 sm:text-xs lg:text-base" hidden={statusBtn === true ? true : false} onClick={() => { clear() }}>
                        เริ่มใหม่
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default HistoryBet