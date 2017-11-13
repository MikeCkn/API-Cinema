import mongoose from 'mongoose';
import {Router} from 'express';
import Film from '../model/film';
import express from 'express';

export default ({config,db}) => {
    let api = Router();

    //GET METHOD ALL
    //v1/restaurant
    api.get('/', (req, res) => {
        Film.find({}, (err, films) => {
            if (err) {
                res.send(err);
            } else
                res.json(films);
        });
    });

    //GET METHOD ID
    //v1/cinema/id
    api.get('/:id', (req, res) => {
        Film.findById(req.params.id, (err, films) => {
            if (err) {
                res.send(err);
            } else
                res.json(films);
        });
    });

    //POST METHOD
    //v1/cinema/add
    api.post("/add", express.urlencoded({extended: true}), (req, res) => {
        console.log(req.body)
        let newRest = new Film(req.body);
        newRest.save((err) => {
            if (err) {
                return res.send(err)
            }
                res.redirect('http://localhost:3000')
            });
        });
    //DELETE METHOD
    //v1/cinema/id
    api.delete('/:id', (req, res) => {
        Film.remove({
            _id: req.params.id
        }, (err, film) => {
            if (err) {
                res.send(err);
            }
            res.json({
                message: `${req.body.title} deleted successfully`
            });
        });
    });

    return api;
};