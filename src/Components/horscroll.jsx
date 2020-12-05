import React, { Component } from 'react';
import CardList from "./carddeck";
import "./Assets/style.css";

class HoriScroll extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{position:"relative"}}>
                <br /><br />
                <center>
                <h1 style={{color:"black",fontFamily:"Gill Sans"}}>Watch my Popular Videos</h1>
                <br /><br />
                <div className="listwrap">
                 <CardList />
                </div>
                <br /><br />
                </center>
            </div>
         );
    }
}
 
export default HoriScroll;