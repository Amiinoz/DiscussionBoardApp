console.log("Hello world from client.js")

// get user input
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
   const content = formData.get("content");


var e = document.getElementById('topic');
var result = e.options[e.selectedIndex].text;
const topic = formData.get('topic')






const messageP = {
  name,
  topic,
  content
}
console.log(messageP)
})


