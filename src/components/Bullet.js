import React from 'react';

export default ( props) => {
  const bullet = {
    color: props.colour,
    fontSize: "14px"
  };
  const list_black = {
    color: "black",
    fontSize: "10px"
  };
  return (
    <li style={bullet}><span style={list_black}>{props.children}</span></li>
  );
};
