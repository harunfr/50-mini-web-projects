"use strict";
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const steps = document.querySelectorAll(".step");
const progressLine = document.querySelector(".progress-line");

prevButton.addEventListener("click", handleProgress);
nextButton.addEventListener("click", handleProgress);

let stepCount = 1;

function handleProgress(e) {
  if (e.target.textContent == "Next" && stepCount < 4) {
    stepCount++;
  } else if (e.target.textContent == "Previous" && stepCount > 1) {
    stepCount--;
  }

  progressLine.style.width = `${(stepCount - 1) * 33.3}%`;

  steps.forEach((step, index) => {
    if (index < stepCount ) {
      step.style.borderColor = "rgb(48, 192, 228)";
    } else {
      step.style.borderColor = "#bbb";
    }
  });
  
  if (stepCount == 1) {
    prevButton.disabled = true;
  } else if (stepCount == 4) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
}
