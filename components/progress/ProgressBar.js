import React, { useEffect, useState, useRef } from "react";
import progressbar from "../../styles/progressbar.module.css";

const ProgressBar = ({ status }) => {
  const [counter, setCounter] = useState(0);
  // let completed = 70;
  useEffect(() => {
    if (status) {
      return;
    }
    if (counter === 100) {
      setCounter(0);
    }
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 10);

    return () => clearInterval(interval);
  }, [counter]);
  return (
    <div className={progressbar.container}>
      <div className={progressbar.bar} style={{ width: `${counter}%` }}>
        <span>{counter}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
