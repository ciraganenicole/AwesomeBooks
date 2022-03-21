import Books from './modules/removeBooks.js';
import spa from './modules/spa.js';

const bookRepo = new Books();

bookRepo.initialize();

const addBook = () => {
  const form = document.getElementById('book-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const { title, author } = form.elements;
    bookRepo.newBook(title.value, author.value);

    title.value = '';
    author.value = '';
  });
};

addBook();
spa();

const d = new Date();
document.getElementById('time').innerHTML = d.toUTCString();