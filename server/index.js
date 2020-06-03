const express = require('express')
const cors = require('cors');
const monk = require('monk');



const app = express();

// create a connection to the db
const db = monk("localhost:27017/discboard2");
const messages = db.get("messages");

app.use(cors());
app.use(express.json());

// define what happens whn client makes request
app.get('/', (req, res) => {
  res.json({
    message:'Hello from EvolveU chat board!'
  })
})

// display messages on the page
app.get('/messages', (req, res) => {
  messages.find().then(messages => {
    res.json(messages)
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
        content: req.body.content.toString(),
        // created: new Date(),
        created:new Date().getTime()

    }
    // insert into the db
    messages.insert(messageP).then(createdMessageP => {
      res.json(createdMessageP);
    })
      // console.log(messageP);
   }
    // if not respond with error
  else {
    res.status(422)
    res.json({
      error: "Please enter valid name, choose a topic and enter message"
    })
  }

})


app.listen(5000, () =>{
  console.log('Listening on http://localhost:5000');
})

module.exports = app;
