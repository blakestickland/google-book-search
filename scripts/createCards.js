// import { attachCards } from "./attachCards.js";

export const createCards = (books) => {
  // create cards for each book
  const cards = books.map((book) => {

    // create .card parent div
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    // create .card--top div
    const cardTopDiv = document.createElement("div");
    cardTopDiv.classList.add("card--top");


    // create .card--top__image div
    const cardTopImageDiv = document.createElement("div");
    cardTopImageDiv.classList.add("card--top__image");

    // create img tag
    const cardImg = document.createElement("img"); // create element
    cardImg.classList.add("thumbnail");
    cardImg.setAttribute("src",         
        book.volumeInfo.imageLinks?.thumbnail ??
        "../images/placeholder_book_thumbnail.svg"
    );  
    cardImg.setAttribute("alt", "book cover"); 

    // attach img to parent div
    cardTopImageDiv.appendChild(cardImg);


    // create .card--top__body div
    const cardTopBodyDiv = document.createElement("div");
    cardTopBodyDiv.classList.add("card--top__body");
    
    // create .card--top__body--title div
    const cardTitleDiv = document.createElement("div");
    cardTitleDiv.classList.add("card--top__body--title");

    // create card title text
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("title");
    const bookTitle = book.volumeInfo.title;
    const titleNode = document.createTextNode(`${bookTitle}`);
    cardTitle.appendChild(titleNode);

    // attach title to parent div
    cardTitleDiv.appendChild(cardTitle);
   

    // create .card--top__body--authors div
    const cardAuthorsDiv = document.createElement("div");
    cardAuthorsDiv.classList.add("card--top__body--authors");

    // create card authors text
    const authors = document.createElement("p");
    authors.classList.add("authors");
    const bookAuthors = book.volumeInfo.authors.join(", ");
    const authorsNode = document.createTextNode(`${bookAuthors}`);
    authors.appendChild(authorsNode);

    // attach authors to parent div
    cardAuthorsDiv.appendChild(authors);


    // create .card--top__body--publication-year div
    const cardPubYearDiv = document.createElement("div");
    cardPubYearDiv.classList.add("card--top__body--publication-year");

    // create card Publication Year text
    const pubYearEl = document.createElement("p");
    pubYearEl.classList.add("publication-year");
    const pubYear = book.volumeInfo.publishedDate;
    const pubYearNode = document.createTextNode(`${pubYear}`);
    pubYearEl.appendChild(pubYearNode);

    // attach Publication Year to parent div
    cardPubYearDiv.appendChild(pubYearEl);


    // create .card--top__body--type div
    const cardTypeDiv = document.createElement("div");
    cardTypeDiv.classList.add("card--top__body--type");

    // create card Type text
    const cardTypeEl = document.createElement("p");
    cardTypeEl.classList.add("type");
    const printType = book.volumeInfo.printType;
    const printTypeNode = document.createTextNode(`${printType}`);
    cardTypeEl.appendChild(printTypeNode);

    // attach card Type to parent div
    cardTypeDiv.appendChild(cardTypeEl);


    // attach card--top__body children to card--top div
    cardTopBodyDiv.appendChild(cardTitleDiv);
    cardTopBodyDiv.appendChild(cardAuthorsDiv);
    cardTopBodyDiv.appendChild(cardPubYearDiv);
    cardTopBodyDiv.appendChild(cardTypeDiv);

    // attach card--top__image and card--top__body to parent div
    cardTopDiv.appendChild(cardTopImageDiv);
    cardTopDiv.appendChild(cardTopBodyDiv);


    // create new div for bottom section of card
    const cardBotDiv = document.createElement("div");
    cardBotDiv.classList.add("card--bottom");

    // create new div for description
    const cardBotDescDiv = document.createElement("div");
    cardBotDescDiv.classList.add("card--bottom--description");

    // create card description text
    const cardBotDescEl = document.createElement("p");
    cardBotDescEl.classList.add("description");
    const bookDescription = book.volumeInfo.description;
    const descriptionNode = document.createTextNode(`${bookDescription}`);
    cardBotDescEl.appendChild(descriptionNode);

    // attach description to parent div
    cardBotDescDiv.appendChild(cardBotDescEl);


    // create div for details link
    const cardDetailsDiv = document.createElement("div");
    cardDetailsDiv.classList.add("card--bottom--details-link");

    // create text for details link
    const cardDetailsEl = document.createElement("p");
    cardDetailsEl.classList.add("details");
    const cardDetails = "View more details >";
    const cardDetailsNode = document.createTextNode(cardDetails);
    cardDetailsEl.appendChild(cardDetailsNode);

    // attach details to parent div
    cardDetailsDiv.appendChild(cardDetailsEl);


    // attach card--bottom children to parent div
    cardBotDiv.appendChild(cardBotDescDiv);
    cardBotDiv.appendChild(cardDetailsDiv);

    // attach card top and bottom divs to parent div
    cardDiv.appendChild(cardTopDiv);
    cardDiv.appendChild(cardBotDiv);

    return cardDiv;
  });
  
  return cards;
}