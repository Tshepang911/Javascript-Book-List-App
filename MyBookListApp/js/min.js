// OOP
// UI targets

/*// 1 form fields
1. get all the input's values from the form fields and store them as variables[title, author, isbn]
2. create an event listener for the button and take values of inputs and add them to the table as values for the rows. function addbook(){add books to the table}
3. create an element that deletes /removes thebooks from the table rows

*/
// Validation
/*
1. validate the form with an if statement 
2. if the form is empty prevent it to add a book plus 
3. create an element that displays a warning message if the form is not filled correctly
4. else if the form is filled correctly display a highlighting message pop up alert that tells the user that everything is ok
*/
// localStorage save books and get them and remove them
// class Store {
// static getBooks() {
//     let books;
//     if (localStorage.getItem('books') === null) {
//         books = [];
//     } else {
//         books = JSON.parse(localStorage.getItem('books'));
//     }
//     return books;
// }
// static addBook(book) {
//     const books = Store.getBooks();
//     books.unshift(book);
//     localStorage.setItem('books', JSON.stringify(books));
// }localStorage.setItem('books', JSON.stringify(books));
// remove book from localStorage
//  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);