/** @format */

const express = require('express');
const app = express();
app.use(express.static('./Public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/data', (req, res) => {
  const { data } = req.body;
  console.log(data);
  res.status(201).json({ sucess: true, value: data });
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server Listening on port : ${port}....`);
});
