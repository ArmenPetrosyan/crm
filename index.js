import express from 'express';

const app = express();
const PORT = 8099;

app.get('/', (req, res) => {
  res.send(`Node server is running on port ${PORT}`);
})


app.listen(PORT, () => `Node server UP and running on port ${PORT}`);
