import React from 'react'

const ResultBet = ({ resultValue, betValue }) => {

    resultValue.map(item => {
        item['classResult'] = ""
        item['result'] = item.type + "x" + item.value
        return betValue.filter((filter) => (filter.type === item.type && filter.value === item.value)).map(data => {
            return item['classResult'] = "text-green-600"
        })
    })

    return (<>
        <div className="lg:col-span-2 sm:col-span-3">
            <label>Last Result BET KEYS</label>
            <hr className="my-3" />
            <div className="grid grid-rows-6 grid-flow-col gap-1 overflow-x-scroll text-center">
                {resultValue.map((item, i) =>
                    <div key={i} className={"bg-gray-800 px-3 py-1 m-0 w-48 text-xs " + item.classResult}>{item.result}</div>
                )}
            </div>
        </div>
    </>)
}

export default ResultBet