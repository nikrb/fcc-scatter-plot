import React        from 'react';
import * as d3    from 'd3';
import DataCircles  from './DataCircles';
import XYAxis       from './XYAxis';

const xMax   = (data)  => d3.max(data, (d) => d.coords[0]);
const yMax   = (data)  => d3.max(data, (d) => d.coords[1]);
const xScale = (props) => {
  return d3.scaleLinear()
    .domain([xMax(props.data), 0])
    .range([props.padding, props.width - props.padding * 2]);
};
const yScale = (props) => {
  return d3.scaleLinear()
    .domain([yMax(props.data),0])
    .range([props.height - props.padding, props.padding]);
};
const marshalProps = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return {...props, ...scales};
};

export default (props) => {
  const d3Props = marshalProps(props);
  return (
    <svg width={d3Props.width} height={d3Props.height}>
      <DataCircles {...d3Props}/>
      <XYAxis {...d3Props}/>
    </svg>
  );
}
