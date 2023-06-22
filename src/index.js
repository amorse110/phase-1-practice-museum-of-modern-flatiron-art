// Globals
const exhibitAPI = "http://localhost:3000/current-exhibits"
let selectedExhibit

//DOM Selectors
const title = document.getElementById('exhibit-title')
const tixBtn = document.getElementById('buy-tickets-button')
const tixBought = document.getElementById('tickets-bought')
const description = document.getElementById('exhibit-description')
const container = document.getElementById('comments-section')
const form = document.getElementById('comment-form')
const image = document.getElementById('exhibit-image')

//EVENT LISTENERS
form.addEventListener('submit', handleSubmit)
tixBtn.addEventListener('click', buyTicket)

//FETCHES
fetch(`${exhibitAPI}/1`)
.then(res => res.json())
.then(displayExhibit)

//Render Functions
function displayExhibit(exhibitObj) {
  selectedExhibit = exhibitObj
  title.textContent = exhibitObj.title
  description.textContent = exhibitObj.description
  image.src = exhibitObj.image
  tixBought.textContent = `${exhibitObj.tickets_bought} Tickets Bought`
  exhibitObj.comments.forEach(comment => addComment(comment))
}

//Event Handlers
function addComment(commentStr) {
  const newComment = document.createElement('p')
  newComment.textContent = commentStr
  container.append(newComment)
}

function handleSubmit(e) {
  e.preventDefault()
  const commentTxt = e.target.commentInput.value
  addComment(commentTxt)
  form.reset()
}

function buyTicket() {
  selectedExhibit.tickets_bought += 1
  displayExhibit(selectedExhibit)
}


//MANTRA
// FETCH the data
// SELECT DOM elements
// CREATE new elements (if needed)
// ASSIGN data to elements
// APPEND elements into DOM