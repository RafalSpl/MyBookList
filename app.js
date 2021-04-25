// Book Class: Represents a Book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'Author One',
                isbn: '3322233'
            },
            {
                title: 'Book Two',
                author: 'Author Two',
                isbn: '333222111'
            }
        ];

        const books = StoredBooks;

        books.forEach((book) => UI.addBookList(book));
    }

    static addBookList(book) {
        const list = document.querySelector('#book-list')

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a  class="btn btn-danger btn-sm delete" href="#">X</a></td>
        `;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

//Store Class: Handles Storage

//Event: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a Book

document.querySelector('#book-form').addEventListener('submit', (e) => {
    //Prevent actual submit

    e.preventDefault();

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Instatiate book
    const book = new Book(title, author, isbn);

    //Add Book to UI
    UI.addBookList(book);

    //Clear fields
    UI.clearFields();
});

//Event: Remove a Book