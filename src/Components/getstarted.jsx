import React, { Component } from 'react';
import img from "./Assets/Gifs/appdevgif.gif";
import LevelBox from "./levelbox";
import Footer from "./footer";
import Cards from "./carddeck";
import "./Assets/style.css";

class Getstarted extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <br /><br/><br/><br/><br/><br /><br/><br/><br/><br/><br /><br/><br/><br/><br/>
                <center>
                <p className="getstart">Getting Started...</p>
                <p className="level">Choose your course according to your skill level</p>
                </center>
                <img className="appdev" src={img} alt="" />
                <LevelBox />
                <br /><br /><br/><br /><br/><br/><br/>
                <center>
                <p className="trending">My Trending Videos</p><br></br><br/><br/>
                <Cards />
                </center>
                <br/><br/><br/>
                <Footer />
            </div>
         );
    }
}
 
export default Getstarted;