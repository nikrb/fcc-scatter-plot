import React, { Component } from 'react';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
  render() {
    // FIXME: can we shorten this?
    const ran = () => { return Math.floor( Math.random() * 100)};
    const data = Array(10).fill(0).map( row => [ran(), ran()]);
    return (
      <div className="App">
        <Chart data={data}/>
      </div>
    );
  }
}

export default App;
