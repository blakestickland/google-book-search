// import { attachCards } from "./attachCards.js";
import { createElementAddClass } from "./createElementAddClass.js";
import { createElementWithText } from "./createElementWithText.js";

export const createCards = (books) => {
  // create cards for each book
  const cards = books.map((book) => {
    // create .card parent div
        const card = createElementAddClass("div", "card");
        const cardTop = createElementAddClass("div", "card--top");
        const details = createElementAddClass("div", "card--top__details");

    // Create another div for description
    // Append the description para to that div
    // Set a width for .card, .details, .descritpion
    // display: flex
    // flex-wrap: wrap,

    // create img tag
      const cardImg = createElementAddClass("img", "card--top__thumbnail");
      cardImg.setAttribute(
        "src",
        book.volumeInfo.imageLinks?.thumbnail ??
          "../images/placeholder_book_thumbnail.svg"
      );
      cardImg.setAttribute("alt", "book cover");

      // attach img to parent div
      cardTop.appendChild(cardImg);


    details.appendChild(
      createElementWithText(
        "h2", 
        book.volumeInfo.title 
          ? book.volumeInfo.title 
          : "No title provided.", 
        "card--top__details__title"
      )
    );

    details.appendChild(
      createElementWithText(
        "p",
        book.volumeInfo.authors
          ? book.volumeInfo.authors.join(", ")
          : "No authors provided.",
        "card--top__details__authors"
      )
    );
    details.appendChild(
      createElementWithText(
        "p",
        book.volumeInfo.publishedDate 
        ? book.volumeInfo.publishedDate.slice(0, 4) 
        : "No published year provided",
        "card--top__details__publication-year"
      )
    );

    cardTop.appendChild(details);
    card.appendChild(cardTop);

    card.appendChild(
      createElementWithText(
        "p",
        book.volumeInfo.description
          ? book.volumeInfo.description
          : "No description provided.",
        "card__description"
      )
    );
    return card;
  });
  
  return cards;
}