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
    api.post('/delete/:id', express.urlencoded({extended: true}), (req, res) => {
        Film.findByIdAndRemove({
            _id: req.params.id
        }, (err, film) => {
            if (err) {
                return res.send(err);
            }
            res.redirect('http://localhost:3000')
            });
        });

    return api;
};