'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _film = require('../model/film');

var _film2 = _interopRequireDefault(_film);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var config = _ref.config,
        db = _ref.db;

    var api = (0, _express.Router)();

    //GET METHOD ALL
    //v1/restaurant
    api.get('/', function (req, res) {
        _film2.default.find({}, function (err, films) {
            if (err) {
                res.send(err);
            } else res.json(films);
        });
    });

    //GET METHOD ID
    //v1/cinema/id
    api.get('/:id', function (req, res) {
        _film2.default.findById(req.params.id, function (err, films) {
            if (err) {
                res.send(err);
            } else res.json(films);
        });
    });

    //POST METHOD
    //v1/cinema/add
    api.post("/add", function (req, res) {
        var newRest = new _film2.default(req.body);
        newRest.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({
                message: req.body.title + ' saved successfully'
            });
        });
    });

    //DELETE METHOD
    //v1/cinema/id
    api.delete('/:id', function (req, res) {
        _film2.default.remove({
            _id: req.params.id
        }, function (err, film) {
            if (err) {
                res.send(err);
            }
            res.json({
                message: req.body.title + ' deleted successfully'
            });
        });
    });

    return api;
};
//# sourceMappingURL=cinema.js.map