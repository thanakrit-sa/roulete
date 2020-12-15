import React from 'react'

const BetTop = ({ chooseBet, imageChip, statusRandom, dataTop }) => {

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

    return (<>
        {dataTop.map((item, i) =>
            <div key={i} className={"border-2 lg:w-20 lg:h-20 sm:w-16 sm:h-16 rounded-lg flex justify-center items-center " + item.class}>{item.num}
                <div className="absolute">
                    <button disabled={item[`disabled_${item.valueSplitL}`] === true || item[`icon${item.valueSplitL}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("SPLIT", item.valueSplitL) }}>
                        <div hidden={item[`icon${item.valueSplitL}`] === item.valueSplitL ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button disabled={item[`icon${item.valueStraight}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("STRAIGHTUP", item.valueStraight) }}>
                        <div hidden={item[`icon${item.valueStraight}`] === item.valueStraight ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 " disabled>
                    </button>
                </div>
                <div className="absolute lg:mt-20 sm:mt-16">
                    <button disabled={item[`icon${item.valueSquare}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("SQUARE", item.valueSquare) }}>
                        <div hidden={item[`icon${item.valueSquare}`] === item.valueSquare ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button disabled={item[`icon${item.valueSplitB}`] || statusRandom === true ? true : false} className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 "
                        onClick={() => { chooseBet("SPLIT", item.valueSplitB) }}>
                        <div hidden={item[`icon${item.valueSplitB}`] === item.valueSplitB ? false : true}>
                            <img src={imageChip} alt="imgChip" />
                        </div>
                    </button>
                    <button className="box-content lg:h-10 sm:h-8 lg:w-10 sm:w-8 " disabled>
                    </button>
                </div>
            </div>
        )}
    </>)
}

export default BetTop