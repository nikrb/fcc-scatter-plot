import React from 'react';
import * as d3    from 'd3';

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
    const {xaxis_format, yaxis_format} = this.props;
    if( this.props.orient === "bottom"){
      axis = d3.axisBottom(this.props.scale);
      if( typeof xaxis_format !== "undefined"){
        axis.tickFormat( xaxis_format);
      }
    } else {
      axis = d3.axisLeft(this.props.scale);
      if( typeof yaxis_format !== "undefined"){
        axis.tickFormat( yaxis_format);
      }
    }
    d3.select(node).call(axis);
  };
  render=()=> {
    return (
      <g className="axis" ref="axis" transform={this.props.translate}></g>
    );
  }
};
