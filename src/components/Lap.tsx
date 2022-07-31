import React, { Fragment } from 'react'
import LapData from '../model'
interface Props {
    lap: LapData;
    no: number;
}
const Laps: React.FC<Props> = ({ lap, no }) => {
    return (
        <Fragment>
            <div className="laps">
                <div className="time">
                    <p> Lap {no}{"- "}
                        {lap.h} :{" "}
                        {lap.m} :{" "}
                        {lap.s} :{" "}
                        {lap.ms}
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Laps