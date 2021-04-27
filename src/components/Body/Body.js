import React from "react";
import bg1 from "../../images/1.png";
import bg2 from "../../images/2.png";
import TabData from "./TabData";
import TopText from "./TopText";

export default function Body() {
  return (
    <div>
      <TopText />
      <img src={bg1} alt="topimage" className="img" />
      <TabData />
      <img src={bg2} alt="bottomimage" className="img" />
    </div>
  );
}
