import React from 'react';

const renderTexts = (props) => {
  return (data, index) => {
    const {coords} = data;
    const textProps = {
      x: props.xScale(coords[0])+3,
      y: props.yScale(coords[1])+3,
      key: index
    };
    const style = {
      fontSize: "10px"
    };
    return <text style={style} {...textProps}>{data.name}</text>;
  };
};

export default (props) => {
  return (
    <g>
      { props.data.map(renderTexts(props)) }
    </g>
  );
}
