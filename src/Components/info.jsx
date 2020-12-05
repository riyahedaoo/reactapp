import React, { Component } from 'react';
import logo from "./Assets/Icons/abhishvek.jpg"
import "./Assets/style.css"

class Info extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <center>
                <div className="info">
                <div className="infoinner">
                <div className="logobox"><center>
                <img src={logo} className="logo" alt=""></img>
                <form
                action="https://www.youtube.com/channel/UCIxJGxcB4pSrIvuv8FyuqUA"
                method="get"
                target="_blank"
                >
                <button type="submit" class="btn btn-danger btn-lg"
                style={{fontFamily:"Georgia" ,fontSize:"2.9vw",height:"auto", width:"auto"}}>
                Subscribe Now!
                </button>
                </form>
                </center></div>
                <p className="textinfo">Looking forward to join that internship or starting your venture?This is the right time! 
                 <br/> Hook up your mobile app development skills with all my FREE videos available at my Channel
                 I code over Backend and Frontend Flutter and Manage servers with AWS. I am expertise with using 
                 REST API and GraphQL with Flutter. I have been coding since 2 and half years.<br/> Well, let's have a coffee?
                </p>
                </div>
                </div>
                </center>
                <br /> <br />
            </div>
         );
    }
}
 
export default Info;