let myLibrary = [];

let newBookForm = document.querySelector("#new-book-form");

const newBtn = document.querySelector(".new-btn");
newBtn.addEventListener("click", function () {
  newBookForm.style.display = "block";
});

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.toggle = function () {
    this.read = !this.read;
  };
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new book(title, author, pages, read);

  myLibrary.push(newBook);
}
newBookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
  displayList();
  clearForm();
});

function displayList() {
  let display = document.querySelector(".book-list");
  display.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];

    let bookEl = document.createElement("div");
    bookEl.innerHTML = `<div class ='card'>Title: ${book.title}<br> Author: ${
      book.author
    }<br> Amount of pages: ${
      book.pages
    }<br><button id='toggle' onclick='toggleRead(${i})'> Read yet? ${
      book.read ? "Yes" : "No"
    }</button><br><button id ='remove-btn' onclick='removeBook(${i})'>X</button></div>`;
    display.appendChild(bookEl);
  }
}

function clearForm() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
  document.querySelector("#read").checked = false;
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayList();
}

function toggleRead(index) {
  myLibrary[index].toggle();
  displayList();
}
