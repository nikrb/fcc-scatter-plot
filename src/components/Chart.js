import React from 'react';
import ScatterPlot from './ScatterPlot';
import Heading from './Heading';
import Legend from './Legend';

export default (props) => {
  const formatMinutes = (d) => {
    const minutes = Math.floor( d/60);
    const seconds = d%60;
    return `${minutes>9?minutes:"0"+minutes}:${seconds>9?seconds:"0"+seconds}`;
  };
  const new_props = {
    ...props,
    xaxis_format: formatMinutes,
    x_ticks: 6
  };
  const wrapper = {
    position: "relative"
  };
  const legend = {
    top: "50%",
    left: "80%",
    width: "150px"
  };
  return (
    <div style={wrapper}>
      <Heading />
      <Legend metrix={legend} />
      <ScatterPlot {...new_props} />
    </div>
  );
};
