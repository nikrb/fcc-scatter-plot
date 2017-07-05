import React, { Component } from 'react';
import Chart from './components/Chart';
import Actions from './Actions';
// import Tooltip from './components/Tooltip';
import './App.css';

class App extends Component {
  state = {
    data: [],
    // tooltip_text: [],
    // tooltip_visible: false
  };
  componentWillMount = () => {
    Actions.getData()
    .then( (response) => {
      this.setState( { data: response});
    });
  };
  handleMouseEnter = (d) => {
    console.log( d);
    //  Name, Nationality, Year, Time, Doping
    // this.setState( { tooltip_text: [d.name+":"+d.nationality,
    //     d.year+" "+d.time,
    //     d.doping
    //   ],
    //   tooltip_visible:true,
    // });
  };
  handleMouseLeave = () => {
    // this.setState( { tooltip_visible: false})
  };
  defaultData = [];
  render = ()=> {
    let data = this.defaultData;
    if( this.state.data.length){
      const start_seconds = this.state.data[0].Seconds;
      data = this.state.data.map( (dp) => {
        return { coords:[dp.Seconds-start_seconds,dp.Place],
                  ranking: dp.Place, name: dp.Name,
                  seconds: dp.Seconds-start_seconds,
                  nationality:dp.Nationality, year: dp.Year, time: dp.Time,
                  doping: dp.Doping
        };
      });
    }
    // const tooltip = {display: (this.state.tooltip_visible)?"block":"none",
    //   top: "100px", left:"25vw"
    // };
    // <Tooltip tip_text={this.state.tooltip_text} pos={tooltip} />
    // <Chart data={data}
    //   handleMouseEnter={this.handleMouseEnter} handleMouseLeave={this.handleMouseLeave}/>
    return (
      <div className="App">
        { data.length?
          <Chart data={data} />
          :<div></div>
        }
      </div>
    );
  };
}

export default App;
