import React from 'react';
import * as d3 from 'd3';

export default class Axis extends React.Component {
  componentDidUpdate = ()=>{
    this.renderAxis();
  }
  componentDidMount=()=> {
    this.renderAxis();
  };
  renderAxis=()=> {
    var node  = this.refs.axis;
    // d3 version
    // var axis = d3.svg.axis().orient(this.props.orient).ticks(5).scale(this.props.scale);
    let axis;
    if( this.props.orient === "bottom"){
      axis = d3.axisBottom(this.props.scale);
    } else {
      axis = d3.axisLeft(this.props.scale);
    }
    const {formatter} = this.props;
    if( typeof formatter !== "undefined"){
      axis.tickFormat( formatter);
    }
    d3.select(node).call(axis);
  };
  render=()=> {
    const {axis_label,axis_style} = this.props;
    const style = {
      transform: axis_style,
      fill:"black"
    };
    return (
      <g className="axis" ref="axis" transform={this.props.translate}>
        <text style={style}>{axis_label}</text>
      </g>
    );
  }
};
