import React, { Component } from 'react';

class FormAddMovie extends Component {
    render() {
        return (
            <div>
                <form method="POST" action="http://localhost:3028/v1/cinema/add">
                   {/* <input type="file" name="pictures"/>*/}
                    <input type="text" name="title" placeholder="Title"/>
                    <input type="text" name="year" placeholder="Year"/>
                    <input type="text" name="actors" placeholder="Actors"/>
                    <button type="submit">ADD</button>
                </form>
            </div>
        );
    }
}

export default FormAddMovie;