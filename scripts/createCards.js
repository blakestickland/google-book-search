// import { attachCards } from "./attachCards.js";
import { createElementAddClass } from "./createElementAddClass.js";
import { createElementWithText } from "./createElementWithText.js";
import { createElementWithClassId } from "./createElementWithClassId.js";
import { createElementWithClassIdText } from "./createElementWithClassIdText.js";
import { createElementAddText } from "./createElementAddText.js";

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

    const openModalBtn = createElementWithClassIdText(
      "button",
      ("modalBtn", "button"),
      `modalBtn-${book.id}`,
      "View longer description >"
    );
    openModalBtn.setAttribute("data-modal-target", `#modal-${book.id}`);
    // create open modal button
    card.appendChild(openModalBtn);
    
    const modalDiv = createElementWithClassId(
      "div",
      "modal",
      `modal-${book.id}`
    );
    const modalContent = createElementAddClass(
      "div",
      "modal-content"
    );
    const modalHeader = createElementAddClass(
      "div",
      "modal-header"
    );
    const modalBody = createElementAddClass(
      "div",
      "modal-body"
    );

    const closeBtn = createElementAddClass(
      "span",
      "closeBtn"
    );
    closeBtn.insertAdjacentHTML("afterbegin", "&times;");
    closeBtn.setAttribute("data-close-button", "");
    
    modalHeader.appendChild(closeBtn);
    modalHeader.appendChild(
      createElementAddText(
        "h2",
        book.volumeInfo.title 
          // ? book.volumeInfo.title 
          // : "No title provided."
      )
    );

    modalBody.appendChild(
      createElementAddText(
        "p",
        book.volumeInfo.description
          // ? book.volumeInfo.description
          // : "No description provided."
      )
    );
      
    // glue the modal elements together
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalDiv.appendChild(modalContent);
    card.appendChild(modalDiv);


    return card;
  });
  
  return cards;
}