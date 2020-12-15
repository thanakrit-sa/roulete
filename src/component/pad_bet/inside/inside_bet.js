import React from 'react'
import BetTop from './bet_top/bet_top'
import BetMiddle from './bet_middle/bet_middle'
import BetBottom from './bet_bottom/bet_bottom'

const InsideBet = ({ chooseBet, imageChip, statusRandom, dataTop, dataMiddle, dataBottom }) => {

    return (
        <div className="grid grid-cols-12 gap-1">
            <BetTop 
                chooseBet={chooseBet}
                imageChip={imageChip}
                statusRandom={statusRandom}
                dataTop={dataTop}
            />
            <BetMiddle 
                chooseBet={chooseBet}
                imageChip={imageChip}
                statusRandom={statusRandom}
                dataMiddle={dataMiddle}
            />
            <BetBottom
                chooseBet={chooseBet}
                imageChip={imageChip}
                statusRandom={statusRandom}
                dataBottom={dataBottom}
            />
        </div>
    )
}

export default InsideBet