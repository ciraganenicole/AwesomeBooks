import { DateTime } from './node_modules/luxon/src/luxon.js';
import Books from './modules/removeBooks.js';
import spa from './modules/spa.js';

const dateBox = document.getElementById('time');
setInterval(() => {
  dateBox.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);
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