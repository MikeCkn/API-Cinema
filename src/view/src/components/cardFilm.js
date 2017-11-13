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
                    <div className="alignCards">{this.state.film.map(item => {
                        return  <p key={item._id} className="cardFilm animated zoomInLeft">
                                    <span className="titleFilm animated fadeInLeftBig">{item.title}</span> 
                                    with <span className="actorsFilm">{item.actors}</span>
                                    <span className="yearFilm">{item.year}</span>
                                    <img className="imageFilm" src={item.image} alt=""/>
                                </p>
                        })} </div>
                </div> 
            )}
            }

export default cardFilm;