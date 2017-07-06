import React from 'react';
import Bullet from './Bullet';

export default (props) => {
  const legend_style = {
    position: "absolute",
    ...props.metrix
  };
  const list_wrapper = {
    padding: "0px"
  };
  return (
    <div style={legend_style}>
      <ul style={list_wrapper}>
        <Bullet colour="black">No Doping Allegations</Bullet>
        <Bullet colour="red">Riders with Doping Allegations</Bullet>
      </ul>
    </div>
  );
};
