/** @format */

const express = require('express');
const app = express();
app.use(express.static('./Public'));
app.use(express.urlencoded({ extended: false }));

app.post('/data', (req, res) => {
  const { payload } = req.body;
  console.log(req);
  res.status(201).json({sucess:true});
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server Listening on port : ${port}....`);
});
