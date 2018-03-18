import React from "react";
import "./jumbotext.css";

const Jumbotron2 = ({ children }) =>
  <div style={{ height: 307, clear: 'both', backgroundColor: '#89c7f0'  }} 
    className="jumbotron jumbotext wow slideInLeft">
    {children}
  </div>;

export default Jumbotron2;
