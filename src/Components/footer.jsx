import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import insta from "./Assets/Icons/insta.png";
import linkedin from "./Assets/Icons/linkedin.png";
import github from "./Assets/Icons/github.jpg";
import fb from "./Assets/Icons/fb.png"
import "./Assets/style.css"

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{position:"relative"}}>
                <Navbar className="footer">
                    <p className="ftext">Abhishvek<br/>
                    Connect with me!</p><br/><br/><br/><br/><br/>
                    <table className="connect" style={{position:"absolute", bottom:"0.5%"}}>
                    <tr>
                                        <th style={{height:"auto",width:"7vw"}}><center><a href="https://www.instagram.com/abhishvek/" target="_blank" rel="noopener noreferrer"><img src={insta} alt="" style={{position:"relative", height:"6vh", width:"4vw",borderRadius:"10%"}}/></a></center></th>
                                        <th style={{height:"auto",width:"7vw"}}><center><a href="https://www.facebook.com/abhishchavan" target="_blank" rel="noopener noreferrer"><img src={fb} alt="" style={{position:"relative", height:"6vh", width:"4vw",borderRadius:"10%"}}/></a></center></th>
                                        <th style={{height:"auto",width:"7vw"}}><center><a href="https://www.linkedin.com/in/abhishek-chavhan-38337b18a" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" style={{position:"relative", height:"6vh", width:"4vw",borderRadius:"10%"}}/></a></center></th>
                                        <th style={{height:"auto",width:"7vw"}}><center><a href="https://github.com/abhishh1/" target="_blank" rel="noopener noreferrer"><img src={github} alt="" style={{position:"relative", height:"6vh", width:"4vw",borderRadius:"10%"}}/></a></center></th>
                    </tr>
                    </table>
                </Navbar>
            </div>
         );
    }
}
 
export default Footer;