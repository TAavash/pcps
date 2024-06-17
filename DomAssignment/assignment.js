/** Question 1: Dynamic Book Addition
 Task: Write a function addBook() that prompts the user for a book title and appends it as a new li element to the ul with the ID book-list.

 Answer:
 **/

function addBook() {
    // Prompt user for a book title
    const bookTitle = prompt("Enter the book title:");
    
    // Check if book title is not empty
    if (bookTitle) {
        // Get the book list element
        const bookList = document.getElementById('book-list');
        
        // Create a new list item element
        const newBook = document.createElement('li');
        
        // Set the text content of the new list item to the book title
        newBook.textContent = bookTitle;
        
        // Append the new list item to the book list
        bookList.appendChild(newBook);
    }
}

// Attach the addBook function to the add book button
document.getElementById('add-book-button').addEventListener('click', addBook);


/** Question 2: Book Search Functionality
Task: Implement a function searchBook() that highlights books in the list matching the search term from the input field with the ID search-bar, setting their background color to yellow.

Answer: **/

 
function searchBook() {
    // Get the search bar element and its value
    const searchBar = document.getElementById('search-bar');
    const searchTerm = searchBar.value.toLowerCase();
    
    // Get all book list items
    const books = document.querySelectorAll('#book-list li');
    let found = false;

    // Loop through each book list item
    books.forEach(book => {
        // Check if the book title includes the search term
        if (book.textContent.toLowerCase().includes(searchTerm)) {
            // Highlight the matched book
            book.style.backgroundColor = 'yellow';
            found = true;
        } else {
            // Remove highlight from non-matched books
            book.style.backgroundColor = '';
        }
    });

    // Alert if no match is found
    if (!found) {
        alert("Book not found.");
    }
}

// Attach the searchBook function to the search button
document.getElementById('search-button').addEventListener('click', searchBook);





/** Question 3: Remove Selected Book
Task: Create a function removeBook() that removes the last book from the list ul with the ID book-list after a confirmation prompt.

Answer:**/

 
function removeBook() {
    // Get the book list element
    const bookList = document.getElementById('book-list');
    
    // Check if there are any books in the list
    if (bookList.children.length > 0) {
        // Confirm removal of the last book
        if (confirm("Are you sure you want to remove the last book?")) {
            // Remove the last book from the list
            bookList.removeChild(bookList.lastElementChild);
        }
    } else {
        // Alert if no books are present to remove
        alert("No books to remove.");
    }
}

// Attach the removeBook function to the remove book button
document.getElementById('remove-book-button').addEventListener('click', removeBook)



/** Question 4: Mark as Favorite
Task: Write a function toggleFavorite() that toggles the favorite class on an li element within the ul with the ID book-list when the element is clicked.

Answer:**/

 
function toggleFavorite(event) {
    // Check if the clicked element is a list item
    if (event.target.tagName === 'LI') {
        // Toggle the favorite class
        event.target.classList.toggle('favorite');
    }
}

// Attach the toggleFavorite function to the book list
document.getElementById('book-list').addEventListener('click', toggleFavorite);



/**Question 5: Clear Search Highlights
Task: Write a function clearSearchHighlights() that resets the background color of all li elements in the ul with the ID book-list to their default state.

Answer:**/

 
function clearSearchHighlights() {
    // Get all book list items
    const books = document.querySelectorAll('#book-list li');
    
    // Loop through each book list item
    books.forEach(book => {
        // Reset the background color to default
        book.style.backgroundColor = '';
    });
}

// Example: Attach the clearSearchHighlights function to a button if needed
// document.getElementById('clear-highlight-button').addEventListener('click', clearSearchHighlights);