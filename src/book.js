function createTitle(bookTitle) {
  return `The ${bookTitle}`
}

function buildMainCharacter(name, age, pronouns) {
var person = {
  name,
  age,
  pronouns
}
  return person
}

function saveReview(newReviews, existingReviews){
  if (existingReviews.includes(newReviews)) {
    return 
  } else
  return existingReviews.push(newReviews)
}

function calculatePageCount(title) {
  
  return title.length * 20
}

function writeBook(title, mainCharacter, genre){
return  book = {
  title: title,
  mainCharacter: mainCharacter,
  pageCount: calculatePageCount(title),
  genre: genre
}
}

function editBook(book){
   var total = book.pageCount * .75
  book.pageCount = total
   return total
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}