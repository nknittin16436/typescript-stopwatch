import React, { Fragment } from 'react'
interface Props {
  lap: () => void;
  num: number;
  state: boolean;
}
const LapButton: React.FC<Props> = ({ lap, num, state }) => {
  return (
    <Fragment>

      {num !== 0 && <button onClick={lap} disabled={!state} className={!state ? "disabled" : ""}>Lap</button>}
    </Fragment>
  )
}

export default LapButton