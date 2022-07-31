import React, { Fragment } from 'react'
interface Props {
  clearLap: () => void;
}
const ClearLaps: React.FC<Props> = ({ clearLap }) => {
  return (
    <Fragment>
      <button onClick={clearLap}>Clear Lap</button>
    </Fragment>
  )
}

export default ClearLaps