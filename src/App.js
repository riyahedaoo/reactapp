import React, { Component } from "react";
import Home from "./Components/home";
import Info from "./Components/info";
import Getstarted from "./Components/getstarted";

class App extends Component {
  state = {};
  render() {
    return(
        <div>
        <table >
        <tr style={{width:"100vw", height:"auto"}}><Home /></tr>
        <tr style={{width:"100vw", height:"auto"}}><Info /></tr>
        <tr style={{width:"100vw", height:"auto"}}><Getstarted /></tr>
        </table>
        </div>
    );
  }
}

export default App;






