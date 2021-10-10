import { createCards } from "./createCards.js";
import { attachCards } from "./attachCards.js";
import { getBooks } from "./getBooks.js";

export const performSearch = async () => {

    console.log("hi form me")

    // get the search terms from the dom
    const input = document.querySelector("#gSearch");
    const searchTerms = input.value;

    // check if a search term has been entered
    if (!searchTerms) {
    alert("Please enter a valid search");
    return;
    }

    console.log(searchTerms);

    //   get books
    const books = await getBooks(searchTerms);
    console.log("books", books);

    // //   create cards
    const bookCards = createCards(books);
    // console.log("bookCards", bookCards);

    // //   attach cards to DOM
    const newCards = attachCards(bookCards);
    
    return newCards;
};