"use strict";


const GOOGLE_BOOKS_API = 
"https://www.googleapis.com/books/v1/volumes"
;
let searchTerm = `dodo birds`;
const URI_EXTENSION_SEARCH = `?q=${searchTerm}`;


const button = document.getElementsByClassName("searchBtn");
console.log(button);
button.addEventListener("click", async (event) => {
  event.preventDefault();
  
  // get the search terms from the dom
  const input = document.querySelector("#searchTerms");
  const searchTerms = input.value.trim().toLowerCase();

  if (!searchTerms) {
    alert("Please enter a valid search term");
    return;
  }

  console.log(searchTerm);

const getBooks = async () => {
  event.preventDefault();

  const response = await fetch(
    `${GOOGLE_BOOKS_API}${URI_EXTENSION_SEARCH}`
    );
  const data = await response.json(); 
  console.log(data);
  data.items.map(item => {
    console.log("Title:", item.volumeInfo.title);
    console.log("Subtitle:", item.volumeInfo.subtitle);
    item.volumeInfo.authors.foreach(author => 
      console.log("Author(s):", author)
    );
    console.log("Description(s):", item.volumeInfo.description);
    console.log("Small Thumbnail:", item.volumeInfo.imageLinks.smallThumbnail);
    console.log("infoLink:", item.volumeInfo.infoLink);
  });
  

  return data.data;
};

//get books
const books = await getBooks(searchTerms);
console.log(books);

  // create li elements for each book
  const listItems = books.map((book) => {
    const element = document.createElement("li");
    const bookText = `${book.title} is from ${breed.country}`;
    const textNode = document.createTextNode(breedText);

    element.appendChild(textNode);
    return element;
  });

//   // attach those li elements to my ul
//   // check if li are present first and remove
//   const list = document.querySelector("#results-list");
//   while (list.lastChild) {
//     list.removeChild(list.lastChild);
//   }
//   const append = (parent) => (child) => parent.appendChild(child);
//   listItems.forEach(append(list));
});