const express = require('express')


const app = express();

// define what happens whn client makes request
app.get('/', (req, res) => {
  res.json({
    message:'Hello from EvolveU chat board!'
  })
})

app.listen(5000, () =>{
  console.log('Listening on http://localhost:5000');
})
