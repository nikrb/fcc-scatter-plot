import React  from 'react';
import Axis   from './Axis';

export default (props) => {
  const xSettings = {
    translate: 'translate(0,' + (props.height - props.padding) + ')',
    scale: props.xScale,
    orient: 'bottom',
    formatter: props.xaxis_format,
    axis_label: props.axis_labels.xaxis,
    axis_style: props.axis_labels.xaxis_style,
    ticks: props.x_ticks
  };
  const ySettings = {
    translate: 'translate(' + props.padding + ', 0)',
    scale: props.yScale,
    orient: 'left',
    formatter: props.yaxis_format,
    axis_label: props.axis_labels.yaxis,
    axis_style: props.axis_labels.yaxis_style,
    ticks: props.y_ticks
  };
  return (
    <g className="xy-axis">
      <Axis {...xSettings}/>
      <Axis {...ySettings}/>
    </g>
  );
};
