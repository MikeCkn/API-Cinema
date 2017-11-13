import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let FilmSchema = new Schema({
    // image: String,
    title: {type: String, required: true},
    year: {type: Number, required: true},
    actors: {type: String, required: true}
}, {
    versionKey: false
});

module.exports = mongoose.model('Film', FilmSchema);