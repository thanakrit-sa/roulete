import React from 'react'
import BetTop from './bet_top/bet_top'
import BetMiddle from './bet_middle/bet_middle'
import BetBottom from './bet_bottom/bet_bottom'

const InsideBet = ({ selectBet, logo, statusRandom, dataTop, dataMiddle, dataBottom }) => {

    return (
        <div className="grid grid-cols-12 gap-1">
            <BetTop 
                selectBet={selectBet}
                logo={logo}
                statusRandom={statusRandom}
                dataTop={dataTop}
            />
            <BetMiddle 
                selectBet={selectBet}
                logo={logo}
                statusRandom={statusRandom}
                dataMiddle={dataMiddle}
            />
            <BetBottom
                selectBet={selectBet}
                logo={logo}
                statusRandom={statusRandom}
                dataBottom={dataBottom}
            />
        </div>
    )
}

export default InsideBet