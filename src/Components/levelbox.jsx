import React, { Component } from 'react';
import "./Assets/style.css";

class LevelBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="levelbox">
                <div className="box1"><p className="leveltext" style={{left:"14%"}}>Beginners</p></div>
                <div className="box2"><p className="leveltext" style={{left:"6.5%"}}>Intermediate</p></div>
                <div className="box3"><p className="leveltext" style={{left:"14%"}}>Advanced</p></div>
            </div>
         );
    }
}
 
export default LevelBox;