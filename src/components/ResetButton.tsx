import React from 'react'
interface Props {
  reset: React.Dispatch<React.SetStateAction<number>>;
  num: number;
  state: boolean;
}
const ResetButton: React.FC<Props> = ({ reset, state, num }) => {
  return (
    <>
      {num !== 0 && !state && <button disabled={state} className={state ? "disabled" : ""} onClick={() => reset(0)}>Reset</button>}
    </>
  )
}

export default ResetButton