import express, { Express } from 'express';
import route from './routes/main.route';

const port: number = 8000;
const app: Express = express();
app.use(express.json());
app.use(route);

app.listen(port, () => {
  console.log(`[API] Running in port: ${port}`);
});
