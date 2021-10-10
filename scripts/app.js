"use strict";
import { performSearch } from "./performSearch.js";

// performSearch.js
  const searchBtn = document.querySelector("#searchBtn");
  searchBtn.addEventListener("click", performSearch);