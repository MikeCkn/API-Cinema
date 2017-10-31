import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let FilmSchema = new Schema({
    image: String,
    title: String,
    year: Number,
    actors: [] 
},
{
    versionKey: false
});

module.exports = mongoose.model('Film', FilmSchema);