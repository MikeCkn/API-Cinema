import React, { Component } from 'react';
// import Wowjs from 'wowjs';
import Animatecss from 'animate.css';

class cardMovie extends Component {

  state = {
    film: []
  }

componentDidMount() {
    fetch('http://localhost:3028/cinema')
    .then(res => res.json())
    .then(body =>{   
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
                        return  <div key={item._id} className="cardFilm animated zoomInLeft">
                                    <span className="titleFilm animated fadeInLeftBig">{item.title}</span> 
                                    with <span className="actorsFilm">{item.actors}</span>
                                    <span className="yearFilm">{item.year}</span>
                                    <img className="imageFilm" src={item.image} alt=""/>
                                    <form action={`http://localhost:3028/cinema/delete/${item._id}`} method="POST">
                                        <button type="submit">x</button>
                                    </form>
                                </div>
                        })} </div>
                </div> 
            )}
            }

export default cardMovie;