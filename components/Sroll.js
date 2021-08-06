import { useState, useEffect } from "react";
import navbar from "../styles/scroll.module.css";

const Sroll = ({ children }) => {
  const [scrollHeight, stScrollHeight] = useState(0);
  const onScroll = (e) => {
    //   stScrollHeight(e.srcElement);
    let element = e.target;
    console.log(element.scrollHeight);
    console.log(element.scrollTop);
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      // do something at end of scroll
      console.log(stScrollHeight(element.scrollHeight - element.scrollTop));
    }
  };
  console.log(scrollHeight);
  return (
    <div className={navbar.scroll} onScroll={onScroll}>
      {children}
    </div>
  );
};

export default Sroll;
