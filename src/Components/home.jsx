import React, { Component } from 'react';
import gif from "./Assets/Gifs/bggif.gif";
import "./Assets/style.css";

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <img alt="" src={gif} className="gif"></img>
                <h1 className="title1">Hi guys, <br /> I'm Abhishvek! <br /></h1>
                <p className="title2">Flutter Developer <br/> AWS Solution Architech <br /> Procastinated Ninja</p>
                <br /><br /><br /><br /><br />
            </div>
         );
    }
}
 
export default Main;