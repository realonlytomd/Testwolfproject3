import React from "react";
import "./jumbotext.css";

const Jumbotron = ({ children }) =>
  <div style={{ height: 220, clear: 'both', backgroundColor: '#89c7f0'  }} 
    className="jumbotron jumbotext wow slideInLeft">
    {children}
  </div>;

export default Jumbotron;
