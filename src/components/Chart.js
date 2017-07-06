import React from 'react';
import ScatterPlot from './ScatterPlot';
import Heading from './Heading';
import Legend from './Legend';

export default (props) => {
  const styles = {
    width   : 800,
    height  : 500,
    padding : 30
  };
  const formatMinutes = (d) => {
    const minutes = Math.floor( d/60);
    const seconds = d%60;
    return `${minutes>9?minutes:"0"+minutes}:${seconds>9?seconds:"0"+seconds}`;
  };
  props = {
    ...props,
    xaxis_format: formatMinutes,
    x_ticks: 6
  };
  const wrapper = {
    position: "relative"
  };
  return (
    <div style={wrapper}>
      <Heading />
      <Legend />
      <ScatterPlot {...props} {...styles} />
    </div>
  );
};
