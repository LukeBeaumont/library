const bookList = [];

const book = document.querySelector(".newbook");

book.addEventListener("click", addBook);

function addBook() {
    const title = prompt('Title?');

    bookList.push(title);
    console.log(bookList);
}
