import React, { Component } from 'react';
import "./Assets/style.css";

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
              <a href={this.props.url}>
                <div className="card" style={{height:"auto",width:"28vw",borderRadius:"3.5%",borderWidth:"10%",padding:"5%"}}>
                <center><img src={this.props.imgURL} alt="" className="card-img-top" style={{height:"27vh",width:"auto"}} /></center>
                <div className="card-body">
                <h4 className="card-text" style={{fontFamily:"Times New Roman"}}>{this.props.title}</h4>
                </div>
                </div>
              </a>
            </div>
         );
    }
}
 
export default Card;





