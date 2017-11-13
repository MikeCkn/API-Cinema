import express from 'express';
import http from 'http';
import config from './config';
import routes from './routes';
import cors from 'cors';

let app = express();
app.server = http.createServer(app);
// MIDDLEWARE
//PARSE APPLICATION/JSON
// app.use();

// PASSPORT CONFIG
// API ROUTES V1
app.use(cors());

app.use('/', routes);

app.server.listen(config.port);
console.log(`Started on port ${app.server.address().port}`);

export default app;