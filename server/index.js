const express = require('express')


const app = express();

// define what happens whn client makes request
app.get('/', (req, res) => {
  res.json({
    message:'Hello from EvolveU chat board!'
  })
})

// create a route that waits incoming req and stores to the db
app.post('/messages', (req, res) => {
  console.log(req.body);
})


app.listen(5000, () =>{
  console.log('Listening on http://localhost:5000');
})
