import React, { Fragment } from 'react'
interface Props {
  start: React.Dispatch<React.SetStateAction<boolean>>;
  setNum: React.Dispatch<React.SetStateAction<number>>;
  num: number;
  state: boolean;
}
const StartButton: React.FC<Props> = ({ start, setNum, num, state }) => {
  const merged = () => {
    start(true);
    setNum(1);
  }
  return (
    <Fragment>

      <button disabled={state} className={state ? "disabled" : ""} onClick={merged}>{num === 0 ? "Start" : "Resume"}</button>
    </Fragment>
  )
}

export default StartButton