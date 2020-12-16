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

        //@ straight bet
        let numCount = 36;
        let straightValue = Math.floor((Math.random() * numCount) + 1);
        const arrStraight = {
            type: "STRAIGHTUP",
            value: straightValue.toString(),
        }
        resultData.push(arrStraight)
        historyData.splice(0, 0, straightValue)
        //@ end straight bet
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
        //@ column bet

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

        groupTopVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
            const dataColumn = {
                type: "COLUMN",
                value: "3rd",
            }
            const arrStreet = {
                type: "STREET",
                value: ((parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item).toString()
            }
            const data = groupTopVertical.filter((filter) => (filter !== straightValue.toString()))
            let streetValue = Math.floor((Math.random() * 10) + 1);
            const arrStreetRandom = {
                type: "STREET",
                value: ((parseInt(data[streetValue]) - 2) + "-" + (parseInt(data[streetValue]) - 1) + "-" + data[streetValue]).toString()
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
            return resultData.push(dataColumn, arrStreet, arrStreetRandom, arrSquare, arrLine)
        })


        groupMiddleVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
            const dataColumn = {
                type: "COLUMN",
                value: "2nd",
            }
            const arrStreet = {
                type: "STREET",
                value: ((parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1)).toString()
            }
            const data = groupMiddleVertical.filter((filter) => (filter !== straightValue.toString()))
            let streetValue = Math.floor((Math.random() * 10) + 1);
            const arrStreetRandom = {
                type: "STREET",
                value: ((parseInt(data[streetValue]) - 1) + "-" + data[streetValue] + "-" + (parseInt(data[streetValue]) + 1)).toString()
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
            return resultData.push(dataColumn, arrStreet, arrStreetRandom, arrSquare, arrLine)
        })


        groupBottomVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
            const dataColumn = {
                type: "COLUMN",
                value: "1st",
            }
            const arrStreet = {
                type: "STREET",
                value: (item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2)).toString()
            }
            const data = groupBottomVertical.filter((filter) => (filter !== straightValue.toString()))
            let streetValue = Math.floor((Math.random() * 10) + 1);
            const arrStreetRandom = {
                type: "STREET",
                value: (data[streetValue] + "-" + (parseInt(data[streetValue]) + 1) + "-" + (parseInt(data[streetValue]) + 2)).toString()
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
            return resultData.push(dataColumn, arrStreet, arrStreetRandom, arrSquare, arrLine)
        })
        //@ end column bet
        //@ dozen bet

        //@ end dozen bet 
        //@ split bet
        let splitValue1 = Math.floor((Math.random() * 11) + 1);
        let splitValue2 = Math.floor((Math.random() * 11) + 1);
        let splitValue3 = Math.floor((Math.random() * 11) + 1);
        let data1 = null
        let data2 = null
        let data3 = null

        if (groupTopVertical[splitValue1] === "36") {
            let splitValueCheck = Math.floor((Math.random() * 2) + 1);
            data1 = splitValueCheck === 1 ? parseInt(groupTopVertical[splitValue1]) - 3 : parseInt(groupTopVertical[splitValue1]) - 1
        } else {
            let splitValueCheck = Math.floor((Math.random() * 2) + 1);
            data1 = splitValueCheck === 1 ? parseInt(groupTopVertical[splitValue1]) + 3 : parseInt(groupTopVertical[splitValue1]) - 1
        }

        if (groupMiddleVertical[splitValue2] === "2") {
            let splitValueCheck = Math.floor((Math.random() * 3) + 1);
            if (splitValueCheck === 1) {
                data2 = parseInt(groupMiddleVertical[splitValue2]) + 3
            } else if (splitValueCheck === 2) {
                data2 = parseInt(groupMiddleVertical[splitValue2]) + 1
            } else {
                data2 = parseInt(groupMiddleVertical[splitValue2]) - 1
            }
        } else if (groupMiddleVertical[splitValue2] === "35") {
            let splitValueCheck = Math.floor((Math.random() * 3) + 1);
            if (splitValueCheck === 1) {
                data2 = parseInt(groupMiddleVertical[splitValue2]) + 1
            } else if (splitValueCheck === 2) {
                data2 = parseInt(groupMiddleVertical[splitValue2]) - 1
            } else {
                data2 = parseInt(groupMiddleVertical[splitValue2]) - 3
            }
            data2 = splitValueCheck === 1 ? parseInt(groupMiddleVertical[splitValue2]) + 3 : parseInt(groupMiddleVertical[splitValue2]) + 1
        } else {
            let splitValueCheck = Math.floor((Math.random() * 4) + 1);
            if (splitValueCheck === 1) {
                data2 = parseInt(groupMiddleVertical[splitValue2]) + 3
            } else if (splitValueCheck === 2) {
                data2 = parseInt(groupMiddleVertical[splitValue2]) - 3
            } else if (splitValueCheck === 3) {
                data2 = parseInt(groupMiddleVertical[splitValue2]) + 1
            } else {
                data2 = parseInt(groupMiddleVertical[splitValue2]) - 1
            }
        }

        if (groupBottomVertical[splitValue3] === "34") {
            let splitValueCheck = Math.floor((Math.random() * 2) + 1);
            data3 = splitValueCheck === 1 ? parseInt(groupBottomVertical[splitValue3]) - 3 : parseInt(groupBottomVertical[splitValue3]) - 1
        } else {
            let splitValueCheck = Math.floor((Math.random() * 2) + 1);
            data3 = splitValueCheck === 1 ? parseInt(groupBottomVertical[splitValue3]) + 3 : parseInt(groupBottomVertical[splitValue3]) + 1
        }

        const arrSplit1 = {
            type: "SPLIT",
            value: groupTopVertical[splitValue1] > data1 ? (data1 + "-" + groupTopVertical[splitValue1]).toString() : (groupTopVertical[splitValue1] + "-" + data1).toString(),
        }
        const arrSplit2 = {
            type: "SPLIT",
            value: groupMiddleVertical[splitValue2] > data2 ? (data2 + "-" + groupMiddleVertical[splitValue2]).toString() : (groupMiddleVertical[splitValue2] + "-" + data2).toString(),
        }
        const arrSplit3 = {
            type: "SPLIT",
            value: groupBottomVertical[splitValue3] > data3 ? (data3 + "-" + groupBottomVertical[splitValue3]).toString() : (groupBottomVertical[splitValue3] + "-" + data3).toString(),
        }
        resultData.push(arrSplit1, arrSplit2, arrSplit3)
        //@ end split bet
        //@ street bet

        //@ end street bet
        //@ square bet
        // groupTopVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
        //     const arrLine = {
        //         type: "SQUARE",
        //         value: item === "36" ?
        //             ((parseInt(item) - 4) + "-" + (parseInt(item) - 3) + "-" + (parseInt(item) - 1) + "-" + item).toString()
        //             :
        //             ((parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3)).toString()
        //     }
        //     resultData.push(arrLine)
        // })
        // groupMiddleVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
        //     let lineCheck = Math.floor((Math.random() * 2) + 1);
        //     const arrLine = {
        //         type: "SQUARE",
        //         value: item === "35" ?
        //             lineCheck === 1 ?
        //                 ((parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + item + "-" + (parseInt(item) + 1)).toString() :
        //                 ((parseInt(item) - 4) + "-" + (parseInt(item) - 3) + "-" + (parseInt(item) - 1) + "-" + item).toString()
        //             :
        //             lineCheck === 1 ?
        //                 (item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 3) + "-" + (parseInt(item) + 4)).toString() :
        //                 ((parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3)).toString()
        //     }
        //     resultData.push(arrLine)
        // })
        // groupBottomVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
        //     const arrLine = {
        //         type: "SQUARE",
        //         value: item === "34" ?
        //             ((parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + item + "-" + (parseInt(item) + 1)).toString()
        //             :
        //             (item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 3) + "-" + (parseInt(item) + 4)).toString()
        //     }
        //     resultData.push(arrLine)
        // })
        //@ end square bet
        //@ line bet
        // groupTopVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
        //     const arrLine = {
        //         type: "LINE",
        //         value: item === "36" ?
        //             ((parseInt(item) - 5) + "-" + (parseInt(item) - 4) + "-" + (parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item).toString()
        //             :
        //             ((parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3)).toString()
        //     }
        //     resultData.push(arrLine)
        // })
        // groupMiddleVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
        //     const arrLine = {
        //         type: "LINE",
        //         value: item === "35" ?
        //             ((parseInt(item) - 4) + "-" + (parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1)).toString()
        //             :
        //             ((parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3) + "-" + (parseInt(item) + 4)).toString()
        //     }
        //     resultData.push(arrLine)
        // })
        // groupBottomVertical.filter((filter) => (filter === straightValue.toString())).map(item => {
        //     const arrLine = {
        //         type: "LINE",
        //         value: item === "34" ?
        //             ((parseInt(item) - 3) + "-" + (parseInt(item) - 2) + "-" + (parseInt(item) - 1) + "-" + item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2)).toString()
        //             :
        //             (item + "-" + (parseInt(item) + 1) + "-" + (parseInt(item) + 2) + "-" + (parseInt(item) + 3) + "-" + (parseInt(item) + 4) + "-" + (parseInt(item) + 5)).toString()
        //     }
        //     resultData.push(arrLine)
        // })
        //@ end line bet
        //@ basket bet
        let basketCount = Math.floor((Math.random() * 2) + 1);
        const arrBasket = {
            type: "BASKET",
            value: (0 + "-" + parseInt(basketCount) + "-" + (parseInt(basketCount) + 1)).toString()
        }
        resultData.push(arrBasket)
        //@ end basket bet

        let mockDataHistory = []
        historyData.map(item => {
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