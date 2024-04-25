import express from 'express';

export default function setupExpress(app) {
    //Setup the body parser and express.json
    app.use(express.urlencoded({ extended: true}));
    app.use(express.json());
};