# Chat Board - EvolveU chat board

A basic chat app built to demonstrate the full stack 🥞 (client, server, database).

With the following features:

* People can send a message
* People can see all the message that have been posted

<!-- ![example-site](example-site.gif) -->

## Objectives

* [ ] 📝 Diagram the Full Stack
* [ ] 🔎 Differentiate between Client and Server
* [ ] ⌨️ Get user input on the Client
* [ ] ➡️ Send user input from the client with fetch to the server
* [ ] 🗃 Store data in a database
* [ ] 🔍 Retrieve data from a database on the Server
* [ ] ⬅️ Retrieve data from a server on the client using Fetch
* [ ] 🙈 Hide/Show elements on the client
* [ ] ✨ Add elements to the page on the client
* [ ] 🚀 Deploy the client with now.sh
* [ ] 🚀 Deploy the database with mlab
* [ ] 🚀 Deploy the server with now.sh

## Front-end

* [ ] Create client folder
* [ ] Setup index.html
* [ ] Bring in Skeleton CSS
  * http://getskeleton.com/
  * https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
* [ ] Create Header
* [ ] Create form
  * [ ] Name
  * [ ] Chat room
  * [ ] Content
  * [ ] Log In
* [ ] Listen for form submit
* [ ] Hide the form
* [ ] Show loading spinner
* [ ] Get data from form and log it
* ✅ Get user input on the Client
* ✅ Hide/Show elements on the client

## Back-end

* [ ] Create server folder
* [ ] npm init -y
* [ ] npm install express morgan
* [ ] Setup index.js
* [ ] Add GET / route
* [ ] Add POST /messages route
  * [ ] log out req.body

## Front-end

* [ ] fetch POST /messages with form data
* [ ] See the CORS error and revel in this moment
* ✅ Send user input from the client with fetch to the server

## Back-end

* [ ] npm install cors
* [ ] Make sure the server is recieving the data
* [ ] Add JSON body parser middleware
* [ ] Validate name and content
  * [ ] Must be a string
  * [ ] Cannot be empty
* [ ] If not valid
  * [ ] Error code 422
  * [ ] Invalid messageP, must be logged in, contain name and content
* [ ] Setup DB Connection
  * [ ] npm install monk
  * [ ] connect to db
  * [ ] create document collection (messages)
* [ ] If Valid
  * [ ] Create messageP object with
    * [ ] name, content, created_date
  * [ ] Insert into DB
  * [ ] Respond with created mew object
* ✅ Store data in a database

## Front-end

* [ ] Log out created messages after POST request
* [ ] Show the form
* [ ] Hide loading spinner

## Back-end

* [ ] GET /messages
  * [ ] Respond with messages from DB
* ✅ Retrieve data from a database on the Server

## Front-end

* [ ] fetch GET /messages
  * [ ] Iterate over array
  * [ ] Append each to page
  * [ ] Reverse before appending
  * [ ] Show the form
  * [ ] Hide loading spinner
* [ ] fetch GET /messages after creating a messageP
* ✅ Retrieve data from a server on the client using Fetch
* ✅ Hide/Show elements on the client
* ✅ Add elements to the page on the client

## Back-end

* [ ] npm install bad-words
  * [ ] Use filter before inserting into DB
* [ ] npm install express-rate-limit
  * [ ] Limit to 1 request every 15 seconds

## Deploy

* ✅ Deploy server with now
  * [ ] Setup environment variables
    * [ ] Database connection
      * process.env.MONGO_URI
  * ✅ Show mlab
  * [ ] Deploy with environment variable
    * now -e MONGO_URI=@evolveUMs-db
  * [ ] Add alias
* ✅ Deploy client folder with now
  * [ ] Set API_URL based on hostname

## What's next?

* Add comments/replies to a messageP
* User Accounts
  * Don't just have the user enter their name
  * Sign up/Login
* User Profiles
  - Only show messages from a given user
* Search messages
* Hashtags
* User @mentions
* Realtime feed of messages
