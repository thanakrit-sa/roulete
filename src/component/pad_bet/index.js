import React, { useState, useEffect } from 'react'
import logo from '../../chip.png'

const PadBet = ({ clickBet, statusClear, statusRandom }) => {

    //@ state
    const [dataTop, setTop] = useState([])
    const [dataMiddle, setMiddle] = useState([])
    const [dataBottom, setBottom] = useState([])
    const [outBet, setOutBet] = useState({
        dozen1: true,
        dozen2: true,
        dozen3: true,
        colume1: true,
        colume2: true,
        colume3: true,
        small: true,
        high: true,
        red: true,
        black: true,
        ood: true,
        even: true,
        zero: true,
    })
    //@ end state

    useEffect(() => {
        if (statusClear === true) {
            setOutBet({
                dozen1: true,
                dozen2: true,
                dozen3: true,
                colume1: true,
                colume2: true,
                colume3: true,
                small: true,
                high: true,
                red: true,
                black: true,
                ood: true,
                even: true,
                zero: true,
            })
            setTop([])
            setMiddle([])
            setBottom([])
        }
    }, [statusClear])

    //@ create in bet pad
    if (dataTop.length === 0) {
        for (let index = 3; index <= 36; index++) {
            if (index % 3 === 0) {
                const dataSplit = (index - 3) + "-" + index
                const data = {
                    num: index,
                    class: index === 3 || index === 9 || index === 12 || index === 18 || index === 21 || index === 27 || index === 30 || index === 36 ?
                        "border-red-800 bg-red-900 "
                        :
                        "border-gray-700 bg-gray-800 ",
                    statusBtn: false,
                    valueStraight: index,
                    valueSquare: (index - 4) + "-" + (index - 3) + "-" + (index - 1) + "-" + index,
                    valueSplitL: dataSplit,
                    valueSplitB: (index - 1) + "-" + index,
                    [`disabled_${dataSplit}`]: dataSplit === "0-3" ? true : false
                }
                dataTop.push(data)
            }
        }
    }
    if (dataMiddle.length === 0) {
        let index = 2
        while (index <= 35) {
            const dataSplit = (index - 3) + "-" + index
            const data = {
                num: index,
                class: index === 5 || index === 14 || index === 23 || index === 32 ?
                    "border-red-800 bg-red-900 "
                    :
                    "border-gray-700 bg-gray-800 ",
                statusBtn: false,
                valueStraight: index,
                valueSquare: (index - 4) + "-" + (index - 3) + "-" + (index - 1) + "-" + index,
                valueSplitL: dataSplit,
                valueSplitB: (index - 1) + "-" + index,
                [`disabled_${dataSplit}`]: dataSplit === "-1-2" ? true : false
            }
            dataMiddle.push(data)
            index = index + 3
        }
    }
    if (dataBottom.length === 0) {
        let index = 1
        while (index <= 34) {
            const dataLine = (index - 3) + "-" + (index - 2) + "-" + (index - 1) + "-" + index + "-" + (index + 1) + "-" + (index + 2)
            const dataSplit = (index - 3) + "-" + index
            const data = {
                num: index,
                class: index === 1 || index === 7 || index === 16 || index === 19 || index === 25 || index === 34 ?
                    "border-red-800 bg-red-900 "
                    :
                    "border-gray-700 bg-gray-800 ",
                statusBtn: false,
                valueStraight: index,
                valueStreet: index + "-" + (index + 1) + "-" + (index + 2),
                valueSplitB: (index - 1) + "-" + index,
                valueSplitL: dataSplit,
                valueLine: dataLine,
                [`disabled_${dataLine}`]: dataLine === "-2--1-0-1-2-3" ? true : false,
                [`disabled_${dataSplit}`]: dataSplit === "-2-1" ? true : false

            }
            dataBottom.push(data)
            index = index + 3
        }
    }
    //@ end create in bet pad
    //@ select in bet / out bet 
    const selectBet = (valueType, valueBet) => {

        console.log(valueType);
        console.log(valueBet);

        if (valueBet === "-2--1-1-2" || valueBet === "-1-0-2-3") {
            dataTop.filter((item) => (item.valueSquare === valueBet)).map(data => {
                return data['icon' + valueBet] = valueBet
            })
            dataMiddle.filter((item) => (item.valueSquare === valueBet)).map(data => {
                return data['icon' + valueBet] = valueBet
            })
            const data = {
                type: "BASKET",
                value: valueBet === "-2--1-1-2" ? (0 + "-" + 1 + "-" + 2).toString() : (0 + "-" + 2 + "-" + 3).toString()
            }
            clickBet(data)
        } else {
            if (valueType === "STRAIGHTUP") {
                dataTop.filter((item) => (item.valueStraight === parseInt(valueBet))).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
                dataMiddle.filter((item) => (item.valueStraight === parseInt(valueBet))).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
                dataBottom.filter((item) => (item.valueStraight === parseInt(valueBet))).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
            } else if (valueType === "SPLIT") {
                dataTop.filter((item) => (item.valueSplitL === valueBet)).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
                dataMiddle.filter((item) => (item.valueSplitL === valueBet)).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
                dataBottom.filter((item) => (item.valueSplitL === valueBet)).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
                dataTop.filter((item) => (item.valueSplitB === valueBet)).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
                dataMiddle.filter((item) => (item.valueSplitB === valueBet)).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
            } else if (valueType === "SQUARE") {
                dataTop.filter((item) => (item.valueSquare === valueBet)).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
                dataMiddle.filter((item) => (item.valueSquare === valueBet)).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
            } else if (valueType === "STREET") {
                dataBottom.filter((item) => (item.valueStreet === valueBet)).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
            } else if (valueType === "LINE") {
                dataBottom.filter((item) => (item.valueLine === valueBet)).map(data => {
                    return data['icon' + valueBet] = valueBet
                })
            } else if (valueType === "DOZEN" && valueBet === "1st") {
                setOutBet({
                    ...outBet,
                    dozen1: false,
                })
            } else if (valueType === "DOZEN" && valueBet === "2nd") {
                setOutBet({
                    ...outBet,
                    dozen2: false,
                })
            } else if (valueType === "DOZEN" && valueBet === "3rd") {
                setOutBet({
                    ...outBet,
                    dozen3: false,
                })
            } else if (valueType === "COLUME" && valueBet === "1st") {
                setOutBet({
                    ...outBet,
                    colume1: false,
                })
            } else if (valueType === "COLUME" && valueBet === "2nd") {
                setOutBet({
                    ...outBet,
                    colume2: false,
                })
            } else if (valueType === "COLUME" && valueBet === "3rd") {
                setOutBet({
                    ...outBet,
                    colume3: false,
                })
            } else if (valueType === "HALF" && valueBet === "SMALL") {
                setOutBet({
                    ...outBet,
                    small: false,
                })
            } else if (valueType === "HALF" && valueBet === "HIGH") {
                setOutBet({
                    ...outBet,
                    high: false,
                })
            } else if (valueType === "HALF" && valueBet === "RED") {
                setOutBet({
                    ...outBet,
                    red: false,
                })
            } else if (valueType === "HALF" && valueBet === "BLACK") {
                setOutBet({
                    ...outBet,
                    black: false,
                })
            } else if (valueType === "HALF" && valueBet === "OOD") {
                setOutBet({
                    ...outBet,
                    ood: false,
                })
            } else if (valueType === "HALF" && valueBet === "EVEN") {
                setOutBet({
                    ...outBet,
                    even: false,
                })
            }
            const data = {
                type: valueType,
                value: valueBet.toString()
            }
            clickBet(data)
        }
    }
    //@ end select in bet / out bet 

    return (
        <div className="mt-14 sm:px-8 lg:px-28">
            <div className="grid grid-cols-12 gap-1">
                <div className="grid grid-rows-5">
                    <div className="row-span-3 flex justify-end">
                        <button className="border-2 border-green-700 bg-green-800 lg:w-20 lg:h-full sm:w-16 sm:h-52 rounded-lg flex justify-center items-center " disabled>0
                        </button>
                    </div>
                </div>
                <div className="col-span-10">
                    {/* @ in pad bet */}
                    <div className="grid grid-cols-12 gap-1">
                        {dataTop.map((item, i) =>
                            <div key={i} className={"border-2 lg:w-20 lg:h-20 sm:w-16 sm:h-16 rounded-lg flex justify-center items-center " + item.class}>{item.num}
                                <div className="absolute">
                                    <button disabled={item[`disabled_${item.valueSplitL}`] === true || item[`icon${item.valueSplitL}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("SPLIT", item.valueSplitL) }}>
                                        <div hidden={item[`icon${item.valueSplitL}`] === item.valueSplitL ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button disabled={item[`icon${item.valueStraight}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("STRAIGHTUP", item.valueStraight) }}>
                                        <div hidden={item[`icon${item.valueStraight}`] === item.valueStraight ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 " disabled>
                                    </button>
                                </div>
                                <div className="absolute lg:mt-20 sm:mt-16">
                                    <button disabled={item[`icon${item.valueSquare}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("SQUARE", item.valueSquare) }}>
                                        <div hidden={item[`icon${item.valueSquare}`] === item.valueSquare ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button disabled={item[`icon${item.valueSplitB}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("SPLIT", item.valueSplitB) }}>
                                        <div hidden={item[`icon${item.valueSplitB}`] === item.valueSplitB ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 " disabled>
                                    </button>
                                </div>
                            </div>
                        )}
                        {dataMiddle.map((item, i) =>
                            <div key={i} className={"border-2 lg:w-20 lg:h-20 sm:w-16 sm:h-16 rounded-lg flex justify-center items-center " + item.class}>{item.num}
                                <div className="absolute">
                                    <button disabled={item[`disabled_${item.valueSplitL}`] === true || item[`icon${item.valueSplitL}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("SPLIT", item.valueSplitL) }}>
                                        <div hidden={item[`icon${item.valueSplitL}`] ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button disabled={item[`icon${item.valueStraight}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("STRAIGHTUP", item.valueStraight) }}>
                                        <div hidden={item[`icon${item.valueStraight}`] === item.valueStraight ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8" disabled>
                                    </button>
                                </div>
                                <div className="absolute lg:mt-20 sm:mt-16">
                                    <button disabled={item[`icon${item.valueSquare}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("SQUARE", item.valueSquare) }}>
                                        <div hidden={item[`icon${item.valueSquare}`] ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button disabled={item[`icon${item.valueSplitB}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("SPLIT", item.valueSplitB) }}>
                                        <div hidden={item[`icon${item.valueSplitB}`] ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8" disabled>
                                    </button>
                                </div>
                            </div>
                        )}
                        {dataBottom.map((item, i) =>
                            <div key={i} className={"border-2 lg:w-20 lg:h-20 sm:w-16 sm:h-16 rounded-lg flex justify-center items-center " + item.class}>{item.num}
                                <div className="absolute">
                                    <button disabled={item[`disabled_${item.valueSplitL}`] === true || item[`icon${item.valueSplitL}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("SPLIT", item.valueSplitL) }}>
                                        <div hidden={item[`icon${item.valueSplitL}`] ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button disabled={item[`icon${item.valueStraight}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("STRAIGHTUP", item.valueStraight) }}>
                                        <div hidden={item[`icon${item.valueStraight}`] === item.valueStraight ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8" disabled>
                                    </button>
                                </div>
                                <div className="absolute lg:mt-20 sm:mt-16">
                                    <button disabled={item[`icon${item.valueLine}`] === item.valueLine || item[`disabled_${item.valueLine}`] === true || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("LINE", item.valueLine) }}>
                                        <div hidden={item[`icon${item.valueLine}`] === item.valueLine ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button disabled={item[`icon${item.valueStreet}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                        onClick={() => { selectBet("STREET", item.valueStreet) }}>
                                        <div hidden={item[`icon${item.valueStreet}`] ? false : true}>
                                            <img src={logo} alt="imgChip" />
                                        </div>
                                    </button>
                                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8" disabled>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* @ end in pad bet */}
                    {/* @ dozen pad bet */}
                    <div className="grid grid-cols-3 mt-1 gap-1">
                        <button disabled={outBet.dozen1 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="DOZEN" id="1st"
                            onClick={(e) => { selectBet(e.target.name, e.target.id) }}>โซน 1-12
                        <div className="absolute" hidden={outBet.dozen1}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                        <button disabled={outBet.dozen2 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="DOZEN" id="2nd"
                            onClick={(e) => { selectBet(e.target.name, e.target.id) }}>โซน 13-24
                        <div className="absolute" hidden={outBet.dozen2}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                        <button disabled={outBet.dozen3 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="DOZEN" id="3rd"
                            onClick={(e) => { selectBet(e.target.name, e.target.id) }}>โซน 25-36
                        <div className="absolute" hidden={outBet.dozen3}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                    </div>
                    {/* @ end dozen pad bet */}
                    {/* @ out pad bet */}
                    <div className="grid grid-cols-6 mt-1 gap-1">
                        <button disabled={outBet.small === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="SMALL" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>ต่ำ 1-18
                        <div className="absolute" hidden={outBet.small}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                        <button disabled={outBet.even === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="EVEN" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>คู่
                        <div className="absolute" hidden={outBet.even}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                        <button disabled={outBet.red === false || statusRandom === true ? true : false} className="border-2 border-red-800 bg-red-900 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="RED" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>แดง
                        <div className="absolute" hidden={outBet.red}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                        <button disabled={outBet.black === false || statusRandom === true ? true : false} className="border-2 border-gray-700 bg-gray-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="BLACK" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>ดำ
                        <div className="absolute" hidden={outBet.black}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                        <button disabled={outBet.high === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="HIGH" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>สูง 19-36
                        <div className="absolute" hidden={outBet.high}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                        <button disabled={outBet.ood === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 w-full lg:h-20 sm:h-16 rounded-lg flex justify-center items-center" name="HALF" id="OOD" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>คี่
                        <div className="absolute" hidden={outBet.ood}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                    </div>
                    {/* @ end out pad bet */}
                </div>
                <div>
                    {/* @ colume pad bet */}
                    <div className="grid grid-rows-3 grid-flow-col gap-1">
                        <button disabled={outBet.colume3 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUME" id="3rd" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>2:1
                        <div className="absolute" hidden={outBet.colume3}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                        <button disabled={outBet.colume2 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUME" id="2nd" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>2:1
                        <div className="absolute" hidden={outBet.colume2}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                        <button disabled={outBet.colume1 === false || statusRandom === true ? true : false} className="border-2 border-green-700 bg-green-800 lg:w-20 sm:w-16 sm:h-16 lg:h-20 sm:w-14 sm:h-14 rounded-lg flex justify-center items-center" name="COLUME" id="1st" onClick={(e) => { selectBet(e.target.name, e.target.id) }}>2:1
                        <div className="absolute" hidden={outBet.colume1}>
                                <img src={logo} alt="imgChip" className="lg:w-10 sm:w-8" />
                            </div>
                        </button>
                    </div>
                    {/* @ end colume pad bet */}
                </div>
            </div>
        </div>)
}

export default PadBet