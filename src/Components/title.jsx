import React, { Component } from 'react';

class Title extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h2
                style={{color:"white", fontFamily:"fantasy",fontSize:"7.2vw"}}>
                Abhishvek
                </h2>
                <center>
                <form
                action="https://www.youtube.com/channel/UCIxJGxcB4pSrIvuv8FyuqUA"
                method="get"
                target="_blank"
                >
                <button type="submit" class="btn btn-outline-danger "
                style={{fontFamily:"Georgia" ,fontSize:"2.9vw",height:"auto", width:"auto"}}>
                Subscribe Now!
                </button>
                </form>
                <br />
                <p style={{fontFamily:"fantasy", color:"white", fontSize:"2.5vw"}}>
                Haha, coding yes</p>
                </center>
            </div>
         );
    }
}
 
export default Title;