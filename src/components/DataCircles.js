import React from 'react';

const renderCircles = (props) => {
  return (data, index) => {
    const {coords} = data;
    const circleProps = {
      cx: props.xScale(coords[0]),
      cy: props.yScale(coords[1]),
      r: 3,
      key: index,
      fill: data.colour,
      onMouseEnter: props.handleMouseEnter.bind( this, data),
      onMouseLeave: props.handleMouseLeave
    };
    return <circle {...circleProps} />;
  };
};

export default (props) => {
  return (
    <g>
      { props.data.map(renderCircles(props)) }
    </g>
  );
}
