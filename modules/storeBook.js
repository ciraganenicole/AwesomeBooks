export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

    getHtml = () => `<ul class="book">
     <li class="list">"${this.title}" by 
     ${this.author}</li>
     <button class="remove">Remove</button>
     </ul>`
}