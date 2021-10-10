export const createCards = (books) => {
  // create li elements for each book
  const listItems = books.map((book) => {
    const element = document.createElement("li");
    element.classList.add("listItems");

    const title = document.createElement("h2");
    title.classList.add("title");
    const bookTitle = book.volumeInfo.title;
    const titleNode = document.createTextNode(`${bookTitle}`);
    title.appendChild(titleNode);

    const authors = document.createElement("h3");
    authors.classList.add("authors");
    const bookAuthors = book.volumeInfo.authors.join(", ");
    const authorsNode = document.createTextNode(`Author(s): ${bookAuthors}`);
    authors.appendChild(authorsNode);

    const description = document.createElement("p");
    description.classList.add("description");
    const bookDescription = book.volumeInfo.description;
    const descriptionNode = document.createTextNode(`${bookDescription}`);
    description.appendChild(descriptionNode);

    const img = document.createElement("img"); // create an img element for the thumbnail
    img.classList.add("thumbnail"); // add a class of thumbnail to the img element
    const att = document.createAttribute("src"); // create an src attribute
    const bookThumbnail =
      book.volumeInfo.imageLinks?.thumbnail ??
      "./img/placeholder_book_thumbnail.svg";
    att.value = bookThumbnail; // set the value of the src attribute
    img.setAttributeNode(att); // attach attribute to the img element

    // .appendChild(bookSmallThumbnail);
    element.appendChild(title);
    element.appendChild(authors);
    element.appendChild(img);
    element.appendChild(description);

    return element;
  });
}