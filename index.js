function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json())
    .then(books => {
      console.log("Fetched Books:", books);

      
      const fifthBook = books[4]; 
      console.log("5th Book:", fifthBook.name);

      
      fetch("https://anapioficeandfire.com/api/characters/1031")
        .then(response => response.json())
        .then(character => console.log("1031st Character:", character.name || "No Name"));

      
      const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
      console.log("Total Pages in All Books:", totalPages);

      renderBooks(books);
    })
    .catch(error => console.error("Error fetching books:", error));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach(book => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

    
    
    