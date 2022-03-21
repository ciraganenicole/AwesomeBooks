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

export default addBook;