import React, { Component } from 'react';
import Chart from './components/Chart';
import Actions from './Actions';
import Tooltip from './components/Tooltip';
import './App.css';

class App extends Component {
  state = {
    data: [],
    tooltip_text: [],
    tooltip_visible: false
  };
  componentWillMount = () => {
    Actions.getData()
    .then( (response) => {
      this.setState( { data: response});
    });
  };
  handleMouseEnter = (d) => {
    //  Name, Nationality, Year, Time, Doping
    this.setState( { tooltip_text: [d.name+":"+d.nationality,
        d.year+" "+d.time,
        d.doping
      ],
      tooltip_visible:true,
    });
  };
  handleMouseLeave = () => {
    this.setState( { tooltip_visible: false})
  };
  defaultData = [];
  render = ()=> {
    const styles = {
      width   : 800,
      height  : 500,
      padding : 40
    };
    let data = this.defaultData;
    if( this.state.data.length){
      const start_seconds = this.state.data[0].Seconds;
      data = this.state.data.map( (dp) => {
        return { coords:[dp.Seconds-start_seconds,dp.Place],
                  ranking: dp.Place, name: dp.Name,
                  seconds: dp.Seconds-start_seconds,
                  nationality:dp.Nationality, year: dp.Year, time: dp.Time,
                  doping: dp.Doping, colour: dp.Doping?"red":"black"
        };
      });
    }
    const tooltip = {display: (this.state.tooltip_visible)?"block":"none",
      top: `calc( 50% - ${styles.height/2}px + ${styles.padding}px )`, left:`calc( 50% - ${styles.width/2}px + ${styles.padding}px + 5px)`
    };
    const axis_labels = {
      xaxis:"Minutes Behind Fastest Time",
      yaxis:"Ranking",
    };
    return (
      <div className="App">
        { data.length?
          <Chart data={data} axis_labels={axis_labels} {...styles}
            handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave}/>
          :<div></div>
        }
        <Tooltip tip_text={this.state.tooltip_text} pos={tooltip} />
      </div>
    );
  };
}

export default App;
