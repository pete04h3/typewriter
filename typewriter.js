"use strict";

window.addEventListener("DOMContentLoaded", startpage);

let text;
let textLength;
let counter;

function startpage() {
  console.log("Init function");

  text = document.querySelector(".typewritten").textContent;

  document.querySelector(".typewritten").textContent = "";
  textLength = text.length;
  counter = 0;
  writeText();
}

function writeText() {
  document.querySelector(".typewritten").textContent = text.substring(0, counter);

  counter++;
  if (textLength >= counter) {
    setTimeout(writeText, 100);
  }
}
