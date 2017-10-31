'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var FilmSchema = new Schema({
    image: String,
    title: String,
    year: Number,
    actors: []
}, {
    versionKey: false
});

module.exports = _mongoose2.default.model('Film', FilmSchema);
//# sourceMappingURL=film.js.map