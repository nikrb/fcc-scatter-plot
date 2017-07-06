import React from 'react';

export default () => {
  const legend_style = {
    position: "absolute",
    top: "50%",
    left: "90%",
    width: "150px"
  };
  const list_wrapper = {
    padding: "0px"
  };
  const bullet_red = {
    color: "red",
    fontSize: "14px"
  };
  const bullet_black = {
    color: "black",
    fontSize: "14px"
  };
  const list_black = {
    color: "black",
    fontSize: "10px"
  };
  return (
    <div style={legend_style}>
      <ul style={list_wrapper}>
        <li style={bullet_black}><span style={list_black}>No Doping Allegations</span></li>
        <li style={bullet_red}><span style={list_black}>Riders with Doping Allegations</span></li>
      </ul>
    </div>
  );
};
