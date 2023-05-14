
const bookShelf = document.querySelector("#book-shelf");
const newBookBtn = document.getElementById('new-btn');


const modal = document.getElementById('form-modal');
const openModal = document.querySelector('.new-btn');
const closeModal = document.querySelector('.close-btn');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener("click", e => {
    const dialogDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close()
    }
  });

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

     this.info = function () {
         return `${title} by ${author}, ${pages} pages, ${read}.`;
     };
}

Book.prototype.printInfo = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
}

Book.prototype.uid = function (){
    return `${this.title.substr(0,5)}-${Math.random().toString(36).slice(5)}`;
}

console.log(Book);

const book1 = new Book("Tower of the end", "Xfiles the Magnative", 627, "unread");
const book2 = new Book("Rizz Valley", "Sommo", 239, "read");

newBookBtn.addEventListener('click', function(e){
    
});

const library = [];

const newBook = Object.create(Book);


function createSlots() {
    const bookSlot = document.createElement('div');
    bookSlot.classList.add('book');
    bookShelf.appendChild(bookSlot);
}


function addBookToLibrary() {
   let title = document.getElementById('title').value;
   let author = document.getElementById('author').value;
   let pages = document.getElementById('pages').value;
   let read = document.getElementById('read').checked;

   let newBook = new Book(title,author,pages,read);
   library.push(newBook);
   /* console.log(newBook);
   console.log(library); */

}

/* let id = Object.create(Book);

        id.uid = Book.uid();
        console.log(id.uid); */


document.getElementById('new-book-form').addEventListener('submit',function(e){
    e.preventDefault();
    addBookToLibrary();
    renderBooks();
    /* render(); */
})

function renderBooks() {
    const bookEl = document.querySelector("#book-shelf");
    bookEl.innerHTML = library.map((book)=>{
        
        let {title,author,pages,read} = book;
        let id = Object.create(book);

        id.uid = book.uid();
        console.log(id.uid);

        return `
            <div class="book">
                <h3>${title}</h3>
                <p>By: ${author}</p>
                <p>No. Of Pages: ${pages}</p>
                <p>Already Read?: ${read}</p>
                <p>Summary: ${book.uid()}</p>
            </div>
        `;
    }).join('');
}
renderBooks();

function removeBook(index){
    library.splice(index,1);
}

/* function render() {
    const libraryEl = document.getElementById('book-shelf');
    
    libraryEl.innerHTML = '';
    for (let i = 0; i < library.length; i++){
        console.log(library[i]);
        let book = library[i];
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `<p>${book.title}</p>`;
        libraryEl.appendChild(bookEl);
    }

     //just another way to do it 
    
} */





/* console.log(book1.printInfo()); */
