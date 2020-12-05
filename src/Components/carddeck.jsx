import React, { Component } from 'react';
import Card from "./card";
import img1 from "./Assets/Images/img1.png";
import img2 from "./Assets/Images/img2.png";
import img3 from "./Assets/Images/img3.png";
import img4 from "./Assets/Images/img4.png";
import img5 from "./Assets/Images/img5.png";
import img6 from "./Assets/Images/img6.png";

class Cards extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.cards.map((cards) =>(
                    <Card 
                    key={cards.id}
                    imgURL={cards.img}
                    url={cards.url}
                    title={cards.title}
                    cards = {cards} />
                ))}
            </div>
         );
    }
}

class CardList extends Component {
    state = { 
        cards : [
            { id : 1, img : img1, url:"https://www.youtube.com/watch?v=3geFMggQj74&t=23s" , title:" Search in Cloud Firestor"},
            { id : 2, img : img2, url:"https://www.youtube.com/watch?v=QP4FCi9MgHU&t=20s" ,title:" GoogleMaps Location Search"},
            { id : 3, img : img3, url:"https://www.youtube.com/watch?v=FEyXP7SebT4&t=480s" , title:" Google SignIn Firebase"},
            { id : 4, img : img4, url:"https://www.youtube.com/watch?v=wN6cH0BRtMY&t=1s" , title:" Netflix Clone - HomePage"},
            { id : 5, img : img5, url:"https://www.youtube.com/watch?v=D810LJVh4sA", title:" Udemy Clone - Splash Screen" },
            { id : 6, img : img6, url:"https://www.youtube.com/watch?v=1xj0eK3Rs0E", title:" Pizzato Trailer" },
        ]
     }
    render() { 

        return ( 
            <div className="card-columns">
                <Cards 
                cards={this.state.cards}/>
            </div>
         );
    }
}
 
export default CardList;

