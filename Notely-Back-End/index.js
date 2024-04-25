import express from 'express';
import setupExpress from './config/express.js';
import 'dotenv/config'

const app = express();
setupExpress(app);
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Listening on port ${PORT}! Now its up to you...`));