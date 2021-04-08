import React from 'react';
import { useState } from 'react';
import DisplayComponent from './components/DisplayComponent';
import ButtonComponent  from './components/ButtonComponent';

import './App.css';


function App() {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  //Not Started = 0
  //Started = 1
  //Pause = 2

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  }

  let updateH = time.h,
      updateM = time.m,
      updateS = time.s,
      updateMS = time.ms;

  const run = () => {
    if(updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if(updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if(updateMS === 100) {
      updateS++;
      updateMS = 0;
    }
    updateMS++;
    return setTime({ms:updateMS, s:updateS, m:updateM, h:updateH});
  }

  const wait = () => {
    clearInterval(interv);
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
  }

  const reset = () => {
    clearInterval(interv);
    setTime({ms:0, s:0, m:0, h:0});
    setStatus(0);
    // setTimeout(start, 500); не смог организовать асинхронную функцию
  }


  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time}/>
          <ButtonComponent start={start} stop={stop} wait={wait} reset={reset} status={status}/>
        </div>
      </div>
    </div>
  );
}

export default App;
