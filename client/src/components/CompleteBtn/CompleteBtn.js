import React from "react";
import "./CompleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const CompleteBtn = props => (
    <span className="glyphicon glyphicon-ok" {...props}>
        
  </span>
);

export default CompleteBtn;