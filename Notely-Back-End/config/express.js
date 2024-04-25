import express from 'express';
import { indexRoute } from '../routes/index.js';

export default function setupExpress(app) {
    //Setup the body parser and express.json
    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());

    //Setup the routes
    app.use('/', indexRoute);
};