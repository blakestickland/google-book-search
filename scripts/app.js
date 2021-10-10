"use strict";
import { performSearch } from "./performSearch.js";

// // getBooks.js
// const getBooks = async (searchTerms) => {
//   const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";
//   const QUERY = `?q=${searchTerms}`;
//   const response = await fetch(`${GOOGLE_BOOKS_API}${QUERY}`);
//   const data = await response.json();
//   console.log(data);

//   return data.items;
// };

// performSearch.js
    const searchBtn = document.querySelector("#searchBtn");
    searchBtn.addEventListener("click", performSearch);