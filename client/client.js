console.log("Hello world from client.js");

// get user input
const form = document.querySelector("form");
// hide and show loading
const loadingElement = document.querySelector('.loading');

// state server location where you sending the req
const API_URL = "http://localhost:5000/messages";

loadingElement.style.display = 'none'

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
      'content-type': 'application/json'
    }
  });

});
