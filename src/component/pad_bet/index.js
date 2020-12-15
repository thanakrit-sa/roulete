import React, { useState, useEffect } from 'react'
import logo from '../../chip.png'
import DozenBet from './dozen/dozen_bet'
import ColumeBet from './colume/colume_bet'
import OutsideBet from './outside/outside_bet'
import InsideBet from './inside/inside_bet'

const PadBet = ({ clickBet, statusClear, statusRandom }) => {

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

    const selectBet = (valueType, valueBet) => {
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
                    <InsideBet
                        selectBet={selectBet}
                        logo={logo}
                        statusRandom={statusRandom}
                        dataTop={dataTop}
                        dataMiddle={dataMiddle}
                        dataBottom={dataBottom}
                    />
                    <DozenBet
                        selectBet={selectBet}
                        logo={logo}
                        outBet={outBet}
                        statusRandom={statusRandom}
                    />
                    <OutsideBet
                        selectBet={selectBet}
                        logo={logo}
                        outBet={outBet}
                        statusRandom={statusRandom}
                    />
                </div>
                <div>
                    <ColumeBet
                        selectBet={selectBet}
                        logo={logo}
                        outBet={outBet}
                        statusRandom={statusRandom}
                    />
                </div>
            </div>
        </div>)
}

export default PadBet