import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.send('Server testing');
});

app.listen(PORT, () => {
  console.log(`I am running on port localhost:${PORT}`);
});