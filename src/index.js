const exhibitAPI = "http://localhost:3000/current-exhibits"
const exTitle = document.getElementById('exhibit-title')
const exDescription = document.getElementById('exhibit-description')
const exImage = document.getElementById('exhibit-image')
const exComments = document.getElementById('comments-section')
const commentButton = document.getElementById('comment-form')
let comArray = [];

//EVENT LISTENERS
commentButton.addEventListener('submit', addComment)

//FETCH
fetch(`${exhibitAPI}/1`)
.then(res => res.json())
.then(renderFirstExhibit)

function renderFirstExhibit(exhibit) {
  exTitle.textContent = exhibit.title;
  exDescription.textContent = exhibit.description;
  exImage.src = exhibit.image;
  comArray = exhibit.comments;
  let arrayLength = comArray.length;
  let comment
  for (i = 0; i < arrayLength; i++) {
    comment = document.createElement('p');
    comment.textContent = comArray[i];
    exComments.appendChild(comment);
  }
}

//Deliverable 2 WORK IN PROGRESS
function addComment(event) {
  event.preventDefault();
  const form = event.target;
  const newComment = form.comment.value
  let comment = document.createElement('p');
  comment.textContent = newComment
  exComments.appendChild(comment)
  comArray.push(newComment)
}




//MANTRA
// FETCH the data
// SELECT DOM elements
// CREATE new elements (if needed)
// ASSIGN data to elements
// APPEND elements into DOM