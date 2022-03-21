const setupRemove = () => {
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
export default setupRemove;