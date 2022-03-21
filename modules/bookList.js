const getBookList = () => {
    let containerHtml = '';
    this.books.forEach((book) => {
        containerHtml += book.getHtml();
    });
    return containerHtml;
}

export default getBookList;