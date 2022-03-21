import Book from './storeBook.js';

class Books {
  constructor() {
    this.books = [];
  }

    initialize = () => {
      const dataString = localStorage.getItem('bookData');
      if (dataString) {
        this.books = JSON.parse(dataString).map((book) => new Book(book.title, book.author));
        this.setHtml();
      }
      this.setupRemove();
    }

    setupRemove = () => {
      const remove = document.querySelectorAll('.remove');
      const book = document.querySelectorAll('.book');

      remove.forEach((button, i) => {
        button.addEventListener('click', () => {
          book[i].remove();
          this.books.splice(i, 1);
          localStorage.setItem('bookData', JSON.stringify(this.books));
        });
      });
    }

    newBook = (title, author) => {
      const book = new Book(title, author);
      this.books.push(book);
      localStorage.setItem('bookData', JSON.stringify(this.books));
      this.setHtml();
      return book;
    }

    getBookList = () => {
      let containerHtml = '';
      this.books.forEach((book) => {
        containerHtml += book.getHtml();
      });
      return containerHtml;
    }

    setHtml = () => {
      const container = document.querySelector('.container');
      container.innerHTML = this.getBookList();
      this.setupRemove();
    }
}
export default Books;