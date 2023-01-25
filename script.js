
const bookShelf = document.querySelector("#book-shelf");

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    /*  this.info = function () {
         return `${title} by ${author}, ${pages} pages, ${read}.`;
     }; */
}

Book.prototype.printInfo = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
}

const newBook = [Object.create(Book)];


const book1 = new Book("Tower of the end", "Xfiles the Magnative", 627, "unread");
const book2 = new Book("Rizz Valley", "Sommo", 239, "read");

function createSlots() {
    const bookSlot = document.createElement('div');
    bookSlot.classList.add('book');
    bookShelf.appendChild(bookSlot);
}

function loadBooks() {
    const aBook = document.querySelectorAll(".book");
    aBook.forEach((book) => {
        book.textContent = myLibrary[0];
    });

}


/* myLibrary[0] = book1.printInfo();
myLibrary[1] = book2.printInfo();
 */

function addBookToLibrary() {
    for (let i = 0; i < 5; i++) {
        createSlots();
        myLibrary[i] = book1.printInfo();
    }
}

addBookToLibrary();
loadBooks();





/* console.log(book1.printInfo()); */
