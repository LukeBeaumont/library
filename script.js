let myLibrary = [];

const newBtn = document.querySelector(".new-btn");
newBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");

  newBookForm.style.display = "block";
});

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new book(title, author, pages, read);
  console.log(newBook);
}
document
  .querySelector("#new-book-form")
  .addEventListener("submit", function () {
    event.preventDefault();
    alert("hello");
  });
