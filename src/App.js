import React, { Component } from 'react';
import Chart from './components/Chart';
import './App.css';

class App extends Component {
  render() {
    const ran = () => Math.floor( Math.random() * 100);
    const data = Array(10).fill(0).map( row => [ran(), ran()]);
    return (
      <div className="App">
        <Chart data={data}/>
      </div>
    );
  }
}

export default App;
