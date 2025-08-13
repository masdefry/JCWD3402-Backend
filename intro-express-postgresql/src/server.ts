import express, { Express } from 'express';
import pool from './config/pool.connection';
import route from './routes/main.route';

const port: number = 8000;
const app: Express = express();
app.use(express.json());
app.use(route);

pool.connect((err, _, release) => {
  if (err) return console.log(`Error acquiring client ${err.stack}`);

  console.log('Connection successful');

  release();
});

app.listen(port, () => {
  console.log(`[API] Running in port: ${port}`);
});
