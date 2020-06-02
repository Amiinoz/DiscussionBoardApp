const express = require('express')
const cors = require('cors');



const app = express();

app.use(cors());
app.use(express.json());

// define what happens whn client makes request
app.get('/', (req, res) => {
  res.json({
    message:'Hello from EvolveU chat board!'
  })
})

//validation
function isValidMessageP(messageP){
  return messageP.name && messageP.name.toString().trim() !== " ";
         messageP.topic && messageP.topic.toString().trim() !== " ";
         messageP.content && messageP.content.toString().trim() !== "";
}

// create a route that waits incoming req and stores to the db
app.post('/messages', (req, res) => {
  // console.log(req.body);
  if(isValidMessageP(req.body)) {
    // insert into the db
    const messageP = {
      name: req.body.name.toString(),
       topic: req.body.topic.toString(),
        content: req.body.content.toString()
    }
      // console.log(messageP);
   }
    // if not respond with error
  else {
    res.status(422)
    res.json({
      error: "Please enter valid name and message"
    })
  }

})


app.listen(5000, () =>{
  console.log('Listening on http://localhost:5000');
})
