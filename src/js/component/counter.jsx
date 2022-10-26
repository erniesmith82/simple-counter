import React from "react";

import PropTypes from "prop-types";

export const Counter = (props) => {
  let initialValue = "000000";

  let seconds = props.seconds.toString();

  let icon = <i class="fa-solid fa-watch-calculator"></i>;

  let result = (
    initialValue.split("").slice(seconds.length).join("") + seconds
  ).split("");
  result.unshift(icon);
  return (<div className="container">    
<img src="https://i.stack.imgur.com/YHh3x.gif" width="1700px" 
     height="1000px" />

    <div className="bigCounter"><blink>
      {result.map((e, i) => {
        return (
          <div className="digits" key={i}>
            {e}
          </div>
        );
      })}
    </blink></div>
    </div>
  );
};

Counter.PropTypes = {
  seconds: PropTypes.string,
};
