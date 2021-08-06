import React, { useState } from "react";
import Navbar from "./Navbar";
import NavbarMain from "./NavbarMain";
const OnScrollNavigation = () => {
  const [show, setShow] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  const onScroll = (e) => {
    setScrollHeight(e.scrollTop);
  };
  console.log(scrollHeight);
  return (
    <div onScroll={onScroll}>
      <Navbar />
    </div>
  );
};

export default OnScrollNavigation;
