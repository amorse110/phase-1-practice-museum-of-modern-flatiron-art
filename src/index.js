const exhibitAPI = "http://localhost:3000/current-exhibits"
const exTitle = document.getElementById('exhibit-title')
const exDescription = document.getElementById('exhibit-description')
const exImage = document.getElementById('exhibit-image')
const exComments = document.getElementById('comments-section')
const commentButton = document.getElementById('comment-form')
let comArray = [];
const ticketButton = document.getElementById('buy-tickets-button')
const boughtTickets = document.getElementById('tickets-bought')

//EVENT LISTENERS
commentButton.addEventListener('submit', addComment)
ticketButton.addEventListener('click', buyTicket)

//FETCH
fetch(`${exhibitAPI}/1`)
.then(res => res.json())
.then(renderFirstExhibit)

//Deliverable 1
function renderFirstExhibit(exhibit) {
  exTitle.textContent = exhibit.title;
  exDescription.textContent = exhibit.description;
  exImage.src = exhibit.image;
  boughtTickets.textContent = `${exhibit.tickets_bought} Tickets Bought`;
  comArray = exhibit.comments;
  let arrayLength = comArray.length;
  let comment
  for (i = 0; i < arrayLength; i++) {
    comment = document.createElement('p');
    comment.textContent = comArray[i];
    exComments.appendChild(comment);
  }
}

//Deliverable 2
function addComment(event) {
  event.preventDefault();
  const form = event.target;
  const newComment = form.comment.value
  let comment = document.createElement('p');
  comment.textContent = newComment
  exComments.appendChild(comment)
  comArray.push(newComment)
}

//Deliverable 3 Work In Progress
function buyTicket() {
  boughtTickets.value = `${parseInt(boughtTickets.value) + 1} Tickets Bought`;
  console.log(boughtTickets)
}


//MANTRA
// FETCH the data
// SELECT DOM elements
// CREATE new elements (if needed)
// ASSIGN data to elements
// APPEND elements into DOM