import './App.css';
import Timer from './components/Timer';
import { useState, useEffect } from "react";
import StartButton from './components/StartButton';
import StopButton from './components/StopButton';
import ResetButton from './components/ResetButton';
import LapButton from './components/LapButton';
import LapDisplay from './components/LapDisplay';
import ClearLaps from './components/ClearLaps';
import LapData from './model';
const App: React.FC = () => {

  const [time, setTime] = useState<number>(0);
  const [running, setRunning] = useState<boolean>(false);
  const [num, setNum] = useState<number>(0);
  const [laps, setLaps] = useState<LapData[]>([]);


  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined = undefined;;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => {
      if (typeof interval === "number" || typeof interval === "undefined")
        clearInterval(interval);
      else clearInterval(interval);

    }
  }, [running]);


  const lap = () => {
    const ltime = time;
    let lapData = {
      h: ("0" + Math.floor((ltime / 3600000) % 60)).slice(-2),
      m: ("0" + Math.floor((ltime / 60000) % 60)).slice(-2),
      s: ("0" + Math.floor((ltime / 1000) % 60)).slice(-2),
      ms: ("0" + Math.floor((ltime / 10) % 100)).slice(-2)
    }

    setLaps((prevlaps) => {
      return [lapData, ...prevlaps]
    })

    // console.log(laps);
  }

  const clearLap = () => {
    setLaps([]);
  }

  return (
    <div className="App">
      <h1>React Stopwatch</h1>
      <Timer time={time} />
      <StartButton start={setRunning} state={running} num={num} setNum={setNum} />
      <StopButton stop={setRunning} state={running} num={num} />
      <ResetButton reset={setTime} state={running} num={num} />
      <LapButton lap={lap} state={running} num={num} />
      {laps.length !== 0 && <ClearLaps clearLap={clearLap} />}
      <LapDisplay laps={laps} />
    </div>
  );
}

export default App;
