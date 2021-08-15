import React, { useEffect, useState, useRef } from "react";
//import progressbar from "../../styles/progressbar.module.css";
import ProgressBar from "../../components/progress/ProgressBar";
const Progress = () => {
  const [status, setStatus] = useState(false);
  setTimeout(() => {
    setStatus(true);
  }, 5000);
  return <ProgressBar status={status} />;
};

export default Progress;
