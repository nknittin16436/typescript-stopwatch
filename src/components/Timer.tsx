import React, { Fragment } from 'react'
interface Props {
  time: number;
}
const Timer: React.FC<Props> = ({ time }: Props) => {
  const timec: number = time;
  return (
    <Fragment>
      <div className="timer">
        <span>{("0" + Math.floor((timec / 3600000) % 60)).slice(-2)}</span>:
        <span>{("0" + Math.floor((timec / 60000) % 60)).slice(-2)}</span>:
        <span>{("0" + Math.floor((timec / 1000) % 60)).slice(-2)}</span>:
        <span className='ms'>{("0" + ((timec / 10) % 100)).slice(-2)}</span>
      </div>
    </Fragment>
  )
}

export default Timer