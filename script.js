const array = [];

const book = document.querySelector(".newbook");

book.addEventListener("click", addBook);

function addBook() {
  this.title = prompt("Title?");
  this.author = prompt("Author?");
}
