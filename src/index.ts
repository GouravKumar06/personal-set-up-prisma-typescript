import express from 'express';
import { prismaClient } from './db.js';
const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/user', async(req, res) => {
    const users = await prismaClient.user.findMany();

    res.json(users);
});

app.post('/data', async(req, res) => {
  await prismaClient.user.create({
    data: {
      name: 'John Doe',
      email: 'test@gmail.com',
    }
  })
  res.send('Data created successfully!');
});

app.listen(port, () => {  
    console.log(`Example app listening at http://localhost:${port}`);
});