import Book from '/modules/storeBook.js';
import { getBookList } from '/module/bookList.js'
import { setupRemove } from '/module/removeBooks.js'
import { addBook } from '/module/addBooks.js'

class Books {
    constructor() {
        this.books = [];
    }
    initialize() {
        const dataString = localStorage.getItem('bookData');
        if (dataString) {
            this.books = JSON.parse(dataString).map((book) => new Book(book.title, book.author));
            this.setHtml();
        }
        setupRemove();
    }
    newBook(title, author) {
        const book = new Book(title, author);
        this.books.push(book);
        localStorage.setItem('bookData', JSON.stringify(this.books));
        this.setHtml();
        return book;
    }

    setHtml() {
        const container = document.querySelector('.container');
        container.innerHTML = getBookList();
        setupRemove();
    }
}

const bookRepo = new Books();

bookRepo.initialize();

addBook();