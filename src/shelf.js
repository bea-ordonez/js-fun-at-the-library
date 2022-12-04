


function shelfBook(books, shelf){
  if (shelf.length < 3){
    return shelf.unshift(books) 
  }
}


function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      return shelf.splice(i, 1)
    } 
  }
}

function listTitles(shelf) {
  var titles = []
for (var i = 0; i < shelf.length; i++) {
 titles.push(shelf[i].title)
}
 return titles.join(", ")
}

// scan shelf and return if title is on shelf
function searchShelf(shelf, checkTitle){
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[1].title ===  checkTitle){
    return true } else {
      return false
    }
  }
}

  



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};