import React from "react";
import "./bubble1.css";

const Bubble1 = ({ children }) =>
  <div className="solid wow fadeInUpBig infinite" data-wow-delay="2s">
    {children}
  </div>;

export default Bubble1;