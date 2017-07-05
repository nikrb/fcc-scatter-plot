import React                from 'react';
import ScatterPlot          from './ScatterPlot';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30
};

export default (props) => {
  const formatMinutes = (d) => {
    const minutes = Math.floor( d/60);
    const seconds = d%60;
    return `${minutes>9?minutes:"0"+minutes}:${seconds>9?seconds:"0"+seconds}`;
  };
  props = {
    ...props,
    xaxis_format: formatMinutes
  };
  return (
    <div>
      <h1>React d3 Chart</h1>
      <ScatterPlot {...props} {...styles} />
    </div>
  );
};
