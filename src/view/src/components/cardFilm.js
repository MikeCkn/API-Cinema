import React, { Component } from 'react';
import Wowjs from 'wowjs';
import Animatecss from 'animate.css';

class cardFilm extends Component {
constructor(props) {
    super(props);
    this.state = {
      film: []
    }
  }

componentDidMount() {
    fetch('http://localhost:3028/v1/cinema')
    .then(res => res.json())
    .then(body =>{
    console.log(body)    
      this.setState({
        film : body
      })
    })
    .catch(err => {throw err})
}

render() {
        console.log(this.state.film)
        return (
                <div>
                    <p className="alignCards">{this.state.film.map(item => {
                        return  <p className="cardFilm animated zoomInLeft">
                                    <p className="titleFilm animated fadeInLeftBig">{item.title}</p> 
                                    with <span className="actorsFilm">{item.actors[0]} {item.actors[1]}</span>
                                    <p className="yearFilm">{item.year}</p>
                                    <img className="imageFilm" src={item.image} alt=""/>
                                </p>
                        })} </p>
                </div> 
            )}
            }

export default cardFilm;