"use strict";
import { performSearch } from "./performSearch.js";

// performSearch.js
// by clicking on Search button
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  performSearch();
});

// or by pressing the 'return' key
const inputListener = document.querySelector("#gSearch");
inputListener.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    performSearch();
  }
}); 