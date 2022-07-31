import React from 'react'
interface Props {
  stop: React.Dispatch<React.SetStateAction<boolean>>;
  num: number;
  state: boolean;
}
const StopButton: React.FC<Props> = ({ state, num, stop }) => {
  return (
    <>
      {num !== 0 && <button disabled={!state} className={!state ? "disabled" : ""} onClick={() => stop(false)}>Stop</button>}
    </>
  )
}

export default StopButton