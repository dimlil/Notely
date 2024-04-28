import express from 'express';
import { indexRoute } from '../routes/index.js';
import cors from 'cors';
import { authRoute } from '../routes/auth.js';

export default function setupExpress(app) {
    //Setup the body parser and express.json
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    //Setup the cors
    app.use(cors({ credentials: true, origin: `${process.env.CORS_URL}` }));

    //Setup the routes
    app.use('/', indexRoute);
    app.use('/', authRoute);
};