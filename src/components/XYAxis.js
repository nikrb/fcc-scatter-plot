import React  from 'react';
import Axis   from './Axis';

export default (props) => {
  const xSettings = {
    translate: 'translate(0,' + (props.height - props.padding) + ')',
    scale: props.xScale,
    orient: 'bottom',
    formatter: props.xaxis_format
  };
  const ySettings = {
    translate: 'translate(' + props.padding + ', 0)',
    scale: props.yScale,
    orient: 'left',
    formatter: props.yaxis_format
  };
  return (
    <g className="xy-axis">
      <Axis {...xSettings}/>
      <Axis {...ySettings}/>
    </g>
  );
};
