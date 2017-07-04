import React                from 'react';
import ScatterPlot          from './ScatterPlot';

const styles = {
  width   : 500,
  height  : 300,
  padding : 30
};

export default (props) => {
  return (
    <div>
      <h1>React d3 Chart</h1>
      <ScatterPlot {...props} {...styles} />
    </div>
  );
};
