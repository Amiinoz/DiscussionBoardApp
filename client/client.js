
console.log("Hello world from client.js");

// get user input
const form = document.querySelector("form");
// hide and show loading
const loadingElement = document.querySelector('.loading');

const messageElements = document.querySelector(".allMessages");

// state server location where you sending the req
const API_URL = "http://localhost:5000/messages";

loadingElement.style.display = ''

listAllMessages();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const content = formData.get("content");

  let e = document.getElementById("topic");
  let result = e.options[e.selectedIndex].text;
  const topic = formData.get("topic");

  const messageP = {
    name,
    topic,
    content,
  };
  // console.log(messageP);
  form.style.display = "none";
  loadingElement.style.display = "";

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(messageP),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(createdMessageP => {
      console.log(createdMessageP);
      form.reset();
       form.style.display = "";
       loadingElement.style.display = "none";
    });

});

// make a request to the db and show message on the page
function listAllMessages() {
  fetch(API_URL).then((response) => response.json()).then((messages) => {
      console.log(messages);
      messages.forEach((messageP) => {
        const div = document.createElement("div");
        const header = document.createElement("h5");
        header.textContent = messageP.name;
          // "Name:" + messageP.name + " " + "" + "Topic:" + " " + messageP.topic;

        const contents = document.createElement("p");
        contents.textContent = messageP.content;

        div.appendChild(header);
        div.appendChild(contents);

        messageElements.appendChild(div);
      });
      loadingElement.style.display = "none";
    });
}



