
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

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
     this.info = function () {
         return `${title} by ${author}, ${pages} pages, ${read}. id ${id}`;
     };
}

Book.prototype.printInfo = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}. id ${id}`;
}

Book.prototype.uid = function (){
    let rndId = `${this.title.substr(1,5)}${this.pages}${this.author.substr(0,5)}`;/* ${Math.random().toString(36).slice(5)}`;  */
    return rndId.replace(/\s/g, '').toLowerCase(); //removes whitespace
} 

console.log(Book);

const book1 = new Book("Tower of the end", "Xfiles the Magnative", 627, "unread");
const book2 = new Book("Rizz Valley", "Sommo", 239, "read");

newBookBtn.addEventListener('click', function(e){
    
});

let library = [new Book("Tower At The End", "Xfiles the Magnative", 627, "read") , new Book("Mansion of Mystery", "Choas Teller", 239, "unread") ];

/* const newBook = Object.create(Book); */


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
   
   let search = library.find((book)=> book.uid() === newBook.uid());
   
   if(search){
        dialog
   } else 
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
        let id = book.uid();
       
        return `
            <div class="book">
                <i class="bi bi-x-lg" onclick =deleteBook('${id}')></i>
                <h2 class='title'>${title}</h2>
                <p>By: ${author}</p>
                <p>No. Of Pages: ${pages}</p>
                <p>Already Read?: ${read}</p>
                <p>ID : ${id}</p>
                <div class="toogle-read">
                    <label for="read">Mark as read:</label>
                    <input type="checkbox" id="read">
                </div>
                
                <button onclick =deleteBook('${id}') 'class='delete'>Delete</button>
            </div>
        `;
    }).join('');
}
renderBooks();

function deleteBook(id){
     
    library = library.filter((book) => book.uid() !== id);
    console.log(id);
    renderBooks();
}

/* function removeBook(index){
    library.splice(index,1);
} */

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
