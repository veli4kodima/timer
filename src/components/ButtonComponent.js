import React from 'react';

function ButtonComponent({start, stop, reset, wait, status}) {
  return (
    <div>
      {status === 0
        ? <button className="stopwatch-btn stopwatch-btn-gre" onClick={start}>Start</button> 
        : ''
      }

      { status === 1 
        ? (
          <>
            <button className="stopwatch-btn stopwatch-btn-red" onClick={stop}>Stop</button>
            <button className="stopwatch-btn stopwatch-btn-blu" onDoubleClick={wait}>Wait</button>
            <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>Reset</button>  
          </>
        )
        :''
      }

      {/* {status === 2 
        ? (
          <>
            <button className="stopwatch-btn stopwatch-btn-gre" onClick={resume}>Resume</button>
            <button className="stopwatch-btn stopwatch-btn-yel" onClick={reset}>Reset</button>  
          </>
        )
        :''
      } */}
    </div>
  );
}

export default ButtonComponent;
