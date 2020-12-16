import React, { useState, useEffect } from 'react'
import ImageChip from '../../chip.png'
import ImageChipCursor from '../../chipCursor.png'
import DozenBet from './dozen/dozen_bet'
import ColumnBet from './column/column_bet'
import OutsideBet from './outside/outside_bet'
import InsideBet from './inside/inside_bet'

const PadBet = ({ selectBet, statusClear, statusRandom }) => {

    useEffect(() => {
        if (statusClear === true) {
            setOutSideBet({})
            setTop([])
            setMiddle([])
            setBottom([])
            setBtnBasket(true)
        }
    }, [statusClear])

    const [dataTop, setTop] = useState([])
    const [dataMiddle, setMiddle] = useState([])
    const [dataBottom, setBottom] = useState([])
    const [outSideBet, setOutSideBet] = useState({})
    const [btnBasket, setBtnBasket] = useState(true)

    const chooseBet = (valueType, valueBet) => {

        console.log(valueType);
        console.log(valueBet);


        setOutSideBet({
            ...outSideBet,
            [valueType + valueBet]: false,
        })

        if (valueBet === "-2--1-1-2" || valueBet === "-1-0-2-3") {
            dataTop.filter((item) => (item.valueSquare === valueBet)).map(data => {
                return data['icon' + valueBet] = valueBet
            })
            dataMiddle.filter((item) => (item.valueSquare === valueBet)).map(data => {
                return data['icon' + valueBet] = valueBet
            })
            const data = {
                type: "STREET",
                value: valueBet === "-2--1-1-2" ? (0 + "-" + 1 + "-" + 2).toString() : (0 + "-" + 2 + "-" + 3).toString()
            }
            selectBet(data)
        } else if (valueBet === "-1-2" || valueBet === "-2-1") {
            dataMiddle.filter((item) => (item.valueSplitL === valueBet)).map(data => {
                return data['icon' + valueBet] = valueBet
            })
            dataBottom.filter((item) => (item.valueSplitL === valueBet)).map(data => {
                return data['icon' + valueBet] = valueBet
            })
            const data = {
                type: "SPLIT",
                value: valueBet === "-1-2" ? (0 + "-" + 2).toString() : (0 + "-" + 1).toString()
            }
            selectBet(data)
        } else if (valueType === "BASKET") {
            setBtnBasket(false)
            const data = {
                type: valueType,
                value: valueBet
            }
            selectBet(data)
        } else {
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
                        <div className="border-2 border-green-700 bg-green-800 lg:w-20 lg:h-full sm:w-16 sm:h-52 rounded-lg flex justify-center items-center " disabled>0
                        <div className="absolute h-72 ml-20 pl-2">
                                <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={btnBasket === false || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                                    onClick={() => { chooseBet("BASKET", (0 + "-" + 1 + "-" + 2 + "-" + 3)) }}>
                                    <div hidden={btnBasket}>
                                        <img src={ImageChip} alt="imgChip" />
                                    </div>
                                </button>
                            </div>
                        </div>
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
                    <ColumnBet
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