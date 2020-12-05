import React, { Component } from 'react';
import logo from "./Assets/Icons/abhishvek.jpg";
import insta from "./Assets/Icons/insta.png";
import linkedin from "./Assets/Icons/linkedin.png";
import github from "./Assets/Icons/github.png";
import fb from"./Assets/Icons/fb.png";
import twitch from "./Assets/Icons/twitch.png";
import reddit from "./Assets/Icons/reddit.webp"
import "./Assets/style.css";

class About extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{position:"relative",backgroundColor:"grey", width:"100vw", height:"auto"}}>
                <table>
                    <tr style={{fontSize:"2.5vw", fontFamily:"Times New Roman",color:"white",width:"100vw", left:"2vw",height:"auto"}}><h3>ABOUT ME:</h3></tr>
                    <tr>
                        <th className="imgbox" style={{height:"auto",width:"20vw"}}> <img src={logo} alt="" className="img" style={{position:"relative", height:"33vh",width:"19vw",borderRadius:"50%",padding:"3vw"}} /></th>

                        <th style={{height:"auto",width:"80vw"}}><center>
                            <p style={{color:"white",position:"relative", fontSize:"1.5vw",fontFamily:"fantasy",textAlign:"left"}}>
                                Sup? Abhishek here! I am a Flutter Developer, AWS Solution Architech and Procastinated Ninja. I code over Backend and Frontend Flutter and Manage servers with AWS. I am expertise with using REST API and GraphQL with Flutter. 
                                <br  /><br />
                                I've started making tutorial videos one the same above topics in the hope that people find some usefull tips and tricks from my videos. I have been coding since 2 and and half years. Well, let's have a coffee?
                                <br /><br />
                                I welcome your doubts and suggestions anytime on the following social networks:
                                <br />
                                <br />
                                    <tr>
                                        <th style={{height:"auto",width:"11vw"}}><center><a href="https://www.instagram.com/abhishvek/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" style={{position:"relative", height:"6vh", width:"4vw",borderRadius:"10%"}}/></a></center></th>
                                        <th style={{height:"auto",width:"11vw"}}><center><a href="https://www.facebook.com/abhishchavan" target="_blank" rel="noopener noreferrer"><img src={fb} alt="" style={{position:"relative", height:"5.5vh", width:"3.5vw",borderRadius:"10%"}}/></a></center></th>
                                        <th style={{height:"auto",width:"11vw"}}><center><a href="https://www.linkedin.com/in/abhishek-chavhan-38337b18a" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" style={{position:"relative", height:"5.5vh", width:"3.5vw",borderRadius:"10%"}}/></a></center></th>
                                        <th style={{height:"auto",width:"11vw"}}><center><a href="https://github.com/abhishh1/" target="_blank" rel="noopener noreferrer"><img src={github} alt="" style={{position:"relative", height:"10vh", width:"10vw",borderRadius:"50%"}}/></a></center></th>
                                        <th style={{height:"auto",width:"11vw"}}><center><a href="https://www.twitch.tv/dungeoon_master" target="_blank" rel="noopener noreferrer"><img src={twitch} alt="" style={{position:"relative", height:"5.5vh", width:"4vw",borderRadius:"50%"}}/></a></center></th>
                                        <th style={{height:"auto",width:"11vw"}}><center><a href="https://www.reddit.com/r/flutterpro/" target="_blank" rel="noopener noreferrer"><img src={reddit} alt="" style={{position:"relative", height:"5.5vh", width:"4vw",borderRadius:"30%"}}/></a></center></th>
                                    </tr>
                            </p>
                        </center></th>
                    </tr>
                </table>
                <br />
            </div>
         );
    }
}
 
export default About;