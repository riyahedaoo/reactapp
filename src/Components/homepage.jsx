import React, { Component } from 'react';
import cover from "./Assets/Images/cover.png";
/*import Title from "./title";*/

class HomePage extends Component {
    state = { }
    render() { 
        return (
            <div >
                <img src={cover} alt=""
                style={{position:"relative", height:"100vh", width:"100vw"}}
                />
                <div style={{position:"absolute", top:"8%", left:"32%", transform:"translate(-92%,-68%"}}>
                <h2 style={{position:"absolute",fontFamily:"fantasy",fontSize:"7.5vw",color:"white"}}><b>Abhishvek</b></h2>
                </div>
             </div>    
         );
    }
}
 
export default HomePage;

