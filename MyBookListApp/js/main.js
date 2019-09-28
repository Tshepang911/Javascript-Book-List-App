// Book Class: Represents a Book
class Book {
    constructor(title, author, isbn) {
        this.author = author;
        this.title = title;
        this.isbn = isbn;
    }
}


// UI Class: handle UI tasks
class UI {
    static displayBooks() {
        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);

    }
    // remove/delete the row from the UI
    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    // 
    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `
            alert alert-${className}
        `
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div, form);
        // make the alerts vanish
        setTimeout(() => document.querySelector('.alert').remove(), 3000);

    }
    // clears out the fields of the UI after form submission
    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}
// Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book) {
        const books = Store.getBooks();
        books.unshift(book);
        localStorage.setItem('books', JSON.stringify(books));
    }
    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        });
        // reset local Storage
        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// Add a Book Event
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get Form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // validate Form Fields
    if (title === ' ' || author === '' || isbn === '') {
        UI.showAlert('Please Fill In all Form Fields', 'danger')
    } else {
        // Instanciate a Book 
        const book = new Book(title, author, isbn);
        // console.log(book);

        // add book to ui
        UI.addBookToList(book);
        // Add  book to store
        Store.addBook(book);
        // show success Message
        UI.showAlert('Book Added', 'success')
        // clear fields
        UI.clearFields();
    }
})
// remove A book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
    // remove book from localStorage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    // show success Message
    UI.showAlert('Book Removed Successfully ( ;', 'success ')
})