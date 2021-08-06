import React, { useState } from "react";
import Navbar from "./Navbar";
import NavbarMain from "./NavbarMain";
const OnScrollNavigation = () => {
  const [show, setShow] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  const onScroll = (e) => {
    setScrollHeight(e.target.scrollTop);
  };
  console.log(scrollHeight);
  return (
    <>
      <Navbar />
    </>
  );
};

export default OnScrollNavigation;
