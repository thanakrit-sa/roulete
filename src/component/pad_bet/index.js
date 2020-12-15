import React, { useState, useEffect } from 'react'
import ImageChip from '../../chip.png'
import DozenBet from './dozen/dozen_bet'
import ColumeBet from './colume/colume_bet'
import OutsideBet from './outside/outside_bet'
import InsideBet from './inside/inside_bet'

const PadBet = ({ selectBet, statusClear, statusRandom }) => {

    useEffect(() => {
        if (statusClear === true) {
            setOutSideBet({})
            setTop([])
            setMiddle([])
            setBottom([])
        }
    }, [statusClear])

    const [dataTop, setTop] = useState([])
    const [dataMiddle, setMiddle] = useState([])
    const [dataBottom, setBottom] = useState([])
    const [outSideBet, setOutSideBet] = useState({})

    const chooseBet = (valueType, valueBet) => {
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
            selectBet(data)
        } else {
            // if (valueType === "STRAIGHTUP") {
            dataTop.filter((item) => (
                item.valueStraight === parseInt(valueBet) || 
                item.valueSplitL === valueBet ||
                item.valueSplitB === valueBet ||
                item.valueSquare === valueBet
            )).map(data => {
                return data['icon' + valueBet] = valueBet
            })
            dataMiddle.filter((item) => (
                item.valueStraight === parseInt(valueBet) || 
                item.valueSplitL === valueBet ||
                item.valueSplitB === valueBet ||
                item.valueSquare === valueBet 
            )).map(data => {
                return data['icon' + valueBet] = valueBet
            })
            dataBottom.filter((item) => (
                item.valueStraight === parseInt(valueBet) || 
                item.valueSplitL === valueBet ||
                item.valueStreet === valueBet ||
                item.valueLine === valueBet
            )).map(data => {
                return data['icon' + valueBet] = valueBet
            })
            // dataMiddle.filter((item) => (item.valueStraight === parseInt(valueBet))).map(data => {
            //     return data['icon' + valueBet] = valueBet
            // })
            // dataBottom.filter((item) => (item.valueStraight === parseInt(valueBet))).map(data => {
            //     return data['icon' + valueBet] = valueBet
            // })
            // } 

            // else if (valueType === "SPLIT") {
            //     dataTop.filter((item) => (item.valueSplitL === valueBet)).map(data => {
            //         return data['icon' + valueBet] = valueBet
            //     })
            //     dataMiddle.filter((item) => (item.valueSplitL === valueBet)).map(data => {
            //         return data['icon' + valueBet] = valueBet
            //     })
            //     dataBottom.filter((item) => (item.valueSplitL === valueBet)).map(data => {
            //         return data['icon' + valueBet] = valueBet
            //     })
            //     dataTop.filter((item) => (item.valueSplitB === valueBet)).map(data => {
            //         return data['icon' + valueBet] = valueBet
            //     })
            //     dataMiddle.filter((item) => (item.valueSplitB === valueBet)).map(data => {
            //         return data['icon' + valueBet] = valueBet
            //     })
            // } else if (valueType === "SQUARE") {
            //     dataTop.filter((item) => (item.valueSquare === valueBet)).map(data => {
            //         return data['icon' + valueBet] = valueBet
            //     })
            //     dataMiddle.filter((item) => (item.valueSquare === valueBet)).map(data => {
            //         return data['icon' + valueBet] = valueBet
            //     })
            // } else if (valueType === "STREET") {
            //     dataBottom.filter((item) => (item.valueStreet === valueBet)).map(data => {
            //         return data['icon' + valueBet] = valueBet
            //     })
            // } else if (valueType === "LINE") {
            //     dataBottom.filter((item) => (item.valueLine === valueBet)).map(data => {
            //         return data['icon' + valueBet] = valueBet
            //     })
            // } 

            if (valueType === "DOZEN" && valueBet === "1st") {
                setOutSideBet({
                    ...outSideBet,
                    dozen1: false,
                })
            } else if (valueType === "DOZEN" && valueBet === "2nd") {
                setOutSideBet({
                    ...outSideBet,
                    dozen2: false,
                })
            } else if (valueType === "DOZEN" && valueBet === "3rd") {
                setOutSideBet({
                    ...outSideBet,
                    dozen3: false,
                })
            } else if (valueType === "COLUME" && valueBet === "1st") {
                setOutSideBet({
                    ...outSideBet,
                    colume1: false,
                })
            } else if (valueType === "COLUME" && valueBet === "2nd") {
                setOutSideBet({
                    ...outSideBet,
                    colume2: false,
                })
            } else if (valueType === "COLUME" && valueBet === "3rd") {
                setOutSideBet({
                    ...outSideBet,
                    colume3: false,
                })
            } else if (valueType === "HALF" && valueBet === "SMALL") {
                setOutSideBet({
                    ...outSideBet,
                    small: false,
                })
            } else if (valueType === "HALF" && valueBet === "HIGH") {
                setOutSideBet({
                    ...outSideBet,
                    high: false,
                })
            } else if (valueType === "HALF" && valueBet === "RED") {
                setOutSideBet({
                    ...outSideBet,
                    red: false,
                })
            } else if (valueType === "HALF" && valueBet === "BLACK") {
                setOutSideBet({
                    ...outSideBet,
                    black: false,
                })
            } else if (valueType === "HALF" && valueBet === "OOD") {
                setOutSideBet({
                    ...outSideBet,
                    ood: false,
                })
            } else if (valueType === "HALF" && valueBet === "EVEN") {
                setOutSideBet({
                    ...outSideBet,
                    even: false,
                })
            }
            const dataBet = {
                type: valueType,
                value: valueBet.toString()
            }
            selectBet(dataBet)
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
                        chooseBet={chooseBet}
                        imageChip={ImageChip}
                        statusRandom={statusRandom}
                        dataTop={dataTop}
                        dataMiddle={dataMiddle}
                        dataBottom={dataBottom}
                    />
                    <DozenBet
                        chooseBet={chooseBet}
                        imageChip={ImageChip}
                        outSideBet={outSideBet}
                        statusRandom={statusRandom}
                    />
                    <OutsideBet
                        chooseBet={chooseBet}
                        imageChip={ImageChip}
                        outSideBet={outSideBet}
                        statusRandom={statusRandom}
                    />
                </div>
                <div>
                    <ColumeBet
                        chooseBet={chooseBet}
                        imageChip={ImageChip}
                        outSideBet={outSideBet}
                        statusRandom={statusRandom}
                    />
                </div>
            </div>
        </div>)
}

export default PadBet