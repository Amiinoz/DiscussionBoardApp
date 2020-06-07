console.log("Hello world from client.js");

// get user input
const form = document.querySelector("form");

// hide and show loading
const loadingElement = document.querySelector(".loading");

const messageElements = document.querySelector(".allMessages");

// state server location where you sending the req
const API_URL = "http://localhost:5000/messages";

loadingElement.style.display = "";

listAllMessages();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name ="Name:" + "" + formData.get("name");
  const content = formData.get("content");

  const e = document.getElementById("topic");
  const result = e.options[e.selectedIndex].text;
  const topic = "Topic of Discussion:" + " " + formData.get("topic");

  const messageP = {
    name,
    topic,
    content,
  };
  // console.log(messageP);
  form.style.display = "none";
  loadingElement.style.display = "";

  // submit to server
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(messageP),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((createdMessageP) => {
      // console.log(createdMessageP);
      form.reset();
      setTimeout(() => {
        form.style.display = "";
      }, 30000)
      form.style.display = "";
      listAllMessages();
      //  loadingElement.style.display = "none";
    });
});

// make a request to the db and show message on the page
function listAllMessages() {
  messageElements.innerHTML = "";
  fetch(API_URL)
    .then((response) => response.json())
    .then((messages) => {
      // console.log(messages);
      messages.reverse();

      messages.forEach((messageP) => {
        const div = document.createElement("div");

        const header = document.createElement("h4");
        header.textContent = messageP.name;

        const topic = document.createElement('p');
        topic.textContent = messageP.topic;

        const contents = document.createElement("p");
        contents.textContent = messageP.content;

        const date = document.createElement("small");
        date.textContent = new Date(messageP.created);

        div.appendChild(header);
        div.appendChild(contents);
        div.appendChild(topic);
        div.appendChild(date);

        messageElements.appendChild(div);
      });
      loadingElement.style.display = "none";
    });
}
