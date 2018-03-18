import React from "react";
import "./bubble2.css";

const Bubble2 = ({ children }) =>
  <div className="solid2 wow fadeInUpBig infinite" data-wow-offset="50" data-wow-delay="6s">
    {children}
  </div>;

export default Bubble2;