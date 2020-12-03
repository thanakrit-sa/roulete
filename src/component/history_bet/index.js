import React, { useState } from 'react'

const History_Bet = () => {

    return (<>
        <div className="bg-gray-800 shadow-lg w-full inline-block rounded">
            <div className="grid grid-cols-3">
                <div className="col-span-2 flex items-center px-3">
                    <div className="border-2 text-white border-red-800 bg-red-900 w-10 h-10 mr-1 rounded-lg flex justify-center items-center">1</div>
                    <div className="border-2 text-white border-gray-700 bg-gray-800 w-10 h-10 mr-1 rounded-lg flex justify-center items-center">1</div>
                </div>
                <div className="flex justify-end">
                    <button className="py-2 px-7 text-white m-3 rounded-full bg-blue-600">
                        หมุนรางวัล
              </button>
                </div>
            </div>
        </div>
    </>)
}

export default History_Bet