import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Backend for Acta de Entrega App is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
