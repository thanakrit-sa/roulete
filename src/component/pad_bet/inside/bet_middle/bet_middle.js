import React from 'react'
import ImageChipCursor from '../../../../chipCursor.png'

const BetMiddle = ({ chooseBet, imageChip, statusRandom, dataMiddle }) => {

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
            }
            dataMiddle.push(data)
            index = index + 3
        }
    }

    return (<>
        {dataMiddle.map((item, i) =>
            <div key={i} className={"border-2 lg:w-20 lg:h-20 sm:w-16 sm:h-16 rounded-lg flex justify-center items-center " + item.class}>{item.num}
                <div className="absolute">
                    <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={item[`icon${item.valueSplitL}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("SPLIT", item.valueSplitL) }}>
                        <div hidden={item[`icon${item.valueSplitL}`] ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={item[`icon${item.valueStraight}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("STRAIGHTUP", item.valueStraight) }}>
                        <div hidden={item[`icon${item.valueStraight}`] === item.valueStraight ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8" style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled>
                    </button>
                </div>
                <div className="absolute lg:mt-20 sm:mt-16">
                    <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={item[`icon${item.valueSquare}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("SQUARE", item.valueSquare) }}>
                        <div hidden={item[`icon${item.valueSquare}`] ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled={item[`icon${item.valueSplitB}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("SPLIT", item.valueSplitB) }}>
                        <div hidden={item[`icon${item.valueSplitB}`] ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8" style={{ outline: '0', cursor: 'url(' + ImageChipCursor + '), pointer' }} disabled>
                    </button>
                </div>
            </div>
        )}
    </>)
}

export default BetMiddle