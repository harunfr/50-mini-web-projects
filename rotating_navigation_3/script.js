"use strict";
const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const contentWrapper = document.querySelector(".content-wrapper");
const buttonWrapper = document.querySelector(".open-and-close");

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

function openNav() {
  contentWrapper.classList.add("rotated");
  buttonWrapper.classList.add("active");
}

function closeNav() {
  contentWrapper.classList.remove("rotated");
  buttonWrapper.classList.remove("active");
}
