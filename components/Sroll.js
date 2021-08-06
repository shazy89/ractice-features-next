import { useState, useEffect } from "react";
import navbar from "../styles/scroll.module.css";

const Sroll = ({ children }) => {
  const [scrollHeight, stScrollHeight] = useState(0);
  const onScroll = (e) => {
    //   stScrollHeight(e.srcElement);
    let element = e.target;
    // console.log(element.scrollHeight);
    //  console.log(Math.floor((element.scrollHeight - element.scrollTop) / 2));
    //  console.log(Math.floor(element.clientHeight / 2));
    let a = Math.floor(element.scrollTop);
    let b = Math.floor(element.clientHeight / 2);
    console.log(a);
    console.log(b);
    if (a === b) {
      // do something at end of scroll
      console.log(stScrollHeight(element.scrollHeight - element.scrollTop));
      console.log("this is th midle");
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
