"use strict";

const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".form");

searchInput.addEventListener("click", (e) => {
  form.classList.add('ready');
});
