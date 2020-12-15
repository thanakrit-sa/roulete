import React, { useState } from 'react'

const HistoryBet = ({ resultBet, clearBet }) => {

    const [resultData, setResultData] = useState([])
    const [statusBtn, setStatusBtn] = useState(true)
    const [history, setHistory] = useState([])
    const [historyData, setHistoryData] = useState([])

    const random = () => {

        //@ straight bet
        let numCount = 36;
        let straightValue = Math.floor((Math.random() * numCount) + 1);
        const arrStraight = {
            type: "STRAIGHTUP",
            value: straightValue.toString(),
        }
        resultData.push(arrStraight)
        historyData.push(straightValue)
        //@ end straight bet
        //@ half bet
        let halfCount = 2;
        let halfRedBlackValue = Math.floor((Math.random() * halfCount) + 1);
        let halfHighLowValue = Math.floor((Math.random() * halfCount) + 1);
        let halfOodEvenValue = Math.floor((Math.random() * halfCount) + 1);

        const arrRedBlack = {
            type: "HALF",
            value: halfRedBlackValue === 1 ? "RED" : "BLACK",
        }
        const arrHighLow = {
            type: "HALF",
            value: halfHighLowValue === 1 ? "HIGH" : "SMALL",
        }
        const arrOodEven = {
            type: "HALF",
            value: halfOodEvenValue === 1 ? "OOD" : "EVEN",
        }
        resultData.push(arrStraight,arrRedBlack,arrHighLow,arrOodEven)
        //@ end half bet
        //@ colume bet
        let index2 = 2
        let index3 = 1
        for (let index1 = 3; index1 <= 36; index1++) {
            if (index1 % 3 === 0) {
                if (index1 === straightValue) {
                    const arrColume = {
                        type: "COLUME",
                        value: "3rd",
                    }
                    resultData.push(arrColume)
                }
            }
        }
        while (index2 <= 35) {
            if (index2 === straightValue) {
                const arrColume = {
                    type: "COLUME",
                    value: "2nd",
                }
                resultData.push(arrColume)
            }
            index2 = index2 + 3
        }
        while (index3 <= 34) {
            if (index3 === straightValue) {
                const arrColume = {
                    type: "COLUME",
                    value: "1st",
                }
                resultData.push(arrColume)
            }
            index3 = index3 + 3
        }
        //@ end colume bet
        //@ dozen bet
        let index4 = 1
        let index5 = 13
        let index6 = 25
        while (index4 <= 12) {
            if (index4 === straightValue) {
                const arrDozen = {
                    type: "DOZEN",
                    value: "1st",
                }
                resultData.push(arrDozen)
            }
            index4 = index4 + 1
        }
        while (index5 <= 24) {
            if (index5 === straightValue) {
                const arrDozen = {
                    type: "DOZEN",
                    value: "2nd",
                }
                resultData.push(arrDozen)
            }
            index5 = index5 + 1
        }
        while (index6 <= 36) {
            if (index6 === straightValue) {
                const arrDozen = {
                    type: "DOZEN",
                    value: "3rd",
                }
                resultData.push(arrDozen)
            }
            index6 = index6 + 1
        }
        //@ end dozen bet 
        //@ split bet
        let splitCount = 2;
        let splitValueCheck = Math.floor((Math.random() * splitCount) + 1);
        let splitValue1 = Math.floor((Math.random() * 11) + 1);
        let splitValue2 = Math.floor((Math.random() * 11) + 1);
        let splitValue3 = Math.floor((Math.random() * 11) + 1);
        let groupTopArr = ["3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"];
        let groupMiddleArr = ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"];
        let groupBottomArr = ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"];
        let data1 = null
        let data2 = null
        let data3 = null

        if (groupTopArr[splitValue1] === "36") {
            let splitValueCheck = Math.floor((Math.random() * 2) + 1);
            data1 = splitValueCheck === 1 ? parseInt(groupTopArr[splitValue1]) - 3 : parseInt(groupTopArr[splitValue1]) - 1
        } else {
            let splitValueCheck = Math.floor((Math.random() * 2) + 1);
            data1 = splitValueCheck === 1 ? parseInt(groupTopArr[splitValue1]) + 3 : parseInt(groupTopArr[splitValue1]) - 1
        }

        if (groupMiddleArr[splitValue2] === "2") {
            let splitValueCheck = Math.floor((Math.random() * 3) + 1);
            if (splitValueCheck === 1) {
                data2 = parseInt(groupMiddleArr[splitValue2]) + 3
            } else if (splitValueCheck === 2) {
                data2 = parseInt(groupMiddleArr[splitValue2]) + 1
            } else {
                data2 = parseInt(groupMiddleArr[splitValue2]) - 1
            }
        } else if (groupMiddleArr[splitValue2] === "35") {
            let splitValueCheck = Math.floor((Math.random() * 3) + 1);
            if (splitValueCheck === 1) {
                data2 = parseInt(groupMiddleArr[splitValue2]) + 1
            } else if (splitValueCheck === 2) {
                data2 = parseInt(groupMiddleArr[splitValue2]) - 1
            } else {
                data2 = parseInt(groupMiddleArr[splitValue2]) - 3
            }
            data2 = splitValueCheck === 1 ? parseInt(groupMiddleArr[splitValue2]) + 3 : parseInt(groupMiddleArr[splitValue2]) + 1
        } else {
            let splitValueCheck = Math.floor((Math.random() * 4) + 1);
            if (splitValueCheck === 1) {
                data2 = parseInt(groupMiddleArr[splitValue2]) + 3
            } else if (splitValueCheck === 2) {
                data2 = parseInt(groupMiddleArr[splitValue2]) - 3
            } else if (splitValueCheck === 3) {
                data2 = parseInt(groupMiddleArr[splitValue2]) + 1
            } else {
                data2 = parseInt(groupMiddleArr[splitValue2]) - 1
            }
        }

        if (groupBottomArr[splitValue3] === "34") {
            let splitValueCheck = Math.floor((Math.random() * 2) + 1);
            data3 = splitValueCheck === 1 ? parseInt(groupBottomArr[splitValue3]) - 3 : parseInt(groupBottomArr[splitValue3]) - 1
        } else {
            let splitValueCheck = Math.floor((Math.random() * 2) + 1);
            data3 = splitValueCheck === 1 ? parseInt(groupBottomArr[splitValue3]) + 3 : parseInt(groupBottomArr[splitValue3]) + 1
        }

        const arrSplit1 = {
            type: "SPLIT",
            value: groupTopArr[splitValue1] > data1 ? (data1 + "-" + groupTopArr[splitValue1]).toString() : (groupTopArr[splitValue1] + "-" + data1).toString(),
        }
        const arrSplit2 = {
            type: "SPLIT",
            value: groupMiddleArr[splitValue2] > data2 ? (data2 + "-" + groupMiddleArr[splitValue2]).toString() : (groupMiddleArr[splitValue2] + "-" + data2).toString(),
        }
        const arrSplit3 = {
            type: "SPLIT",
            value: groupBottomArr[splitValue3] > data3 ? (data3 + "-" + groupBottomArr[splitValue3]).toString() : (groupBottomArr[splitValue3] + "-" + data3).toString(),
        }
        resultData.push(arrSplit1, arrSplit2, arrSplit3)
        //@ end split bet
        //@ street bet
        let groupCount = 11;
        let streetValue1 = Math.floor((Math.random() * groupCount) + 1);
        let streetValue2 = Math.floor((Math.random() * groupCount) + 1);
        const arrStreet1 = {
            type: "STREET",
            value: (groupBottomArr[streetValue1] + "-" + (parseInt(groupBottomArr[streetValue1]) + 1) + "-" + (parseInt(groupBottomArr[streetValue1]) + 2)).toString(),
        }
        const arrStreet2 = {
            type: "STREET",
            value: (groupBottomArr[streetValue2] + "-" + (parseInt(groupBottomArr[streetValue2]) + 1) + "-" + (parseInt(groupBottomArr[streetValue2]) + 2)).toString(),
        }
        resultData.push(arrStreet1,arrStreet2)
        //@ end street bet
        //@ square bet
        let groupSquareArr = ["5", "11", "17", "23", "29", "32"];
        let squareCount = Math.floor((Math.random() * 5) + 1);
        let squareCheck = Math.floor((Math.random() * 4) + 1);
        let dataSquare = null
        if (squareCheck === 1) {
            dataSquare = ((parseInt(groupSquareArr[squareCount]) - 4) + "-" + (parseInt(groupSquareArr[squareCount]) - 3) + "-" + (parseInt(groupSquareArr[squareCount]) - 1) + "-" + parseInt(groupSquareArr[squareCount])).toString()
        } else if (squareCheck === 2) {
            dataSquare = ((parseInt(groupSquareArr[squareCount]) - 3) + "-" + (parseInt(groupSquareArr[squareCount]) - 2) + "-" + parseInt(groupSquareArr[squareCount]) + "-" + (parseInt(groupSquareArr[squareCount]) + 1)).toString()
        } else if (squareCheck === 3) {
            dataSquare = ((parseInt(groupSquareArr[squareCount]) - 1) + "-" + parseInt(groupSquareArr[squareCount]) + "-" + (parseInt(groupSquareArr[squareCount]) + 2) + "-" + (parseInt(groupSquareArr[squareCount]) + 3)).toString()
        } else {
            dataSquare = (parseInt(groupSquareArr[squareCount]) + "-" + (parseInt(groupSquareArr[squareCount]) + 1) + "-" + (parseInt(groupSquareArr[squareCount]) + 3) + "-" + (parseInt(groupSquareArr[squareCount]) + 4)).toString()
        }
        const arrSquare = {
            type: "SQUARE",
            value: dataSquare,
        }
        resultData.push(arrSquare)
        //@ end square bet
        //@ line bet
        let lineCount = Math.floor((Math.random() * 8) + 1);
        let groupLineArr = ["1", "4", "7", "13", "16", "19", "25", "28", "31"];
        const arrLine = {
            type: "LINE",
            value: (parseInt(groupLineArr[lineCount]) + "-" + (parseInt(groupLineArr[lineCount]) + 1) + "-" + (parseInt(groupLineArr[lineCount]) + 2) + "-" + (parseInt(groupLineArr[lineCount]) + 3) + "-" + (parseInt(groupLineArr[lineCount]) + 4) + "-" + (parseInt(groupLineArr[lineCount]) + 5)).toString(),
        }
        resultData.push(arrLine)
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
            mockDataHistory.push(data)
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