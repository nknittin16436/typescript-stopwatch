import React, { Fragment } from 'react'
import Lap from './Lap';
import LapData from '../model';
interface Props {
    laps: LapData[];
}
const LapDisplay: React.FC<Props> = ({ laps }) => {
    return (
        <Fragment>
            {laps.length === 0 ? <h1>No Laps</h1> : laps.map((lap, index) => (
                <Lap lap={lap} key={index} no={laps.length - index} />
            )
            )}
        </Fragment>
    )

}

export default LapDisplay;