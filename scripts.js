const INITIAL_COLOR = "";

let color = INITIAL_COLOR;
const inputElement = document.getElementById("myInput");
const pageTitleElement = document.getElementById("coloring");
const inputElementValue = inputElement.value;

function handleReset() {
  color = INITIAL_COLOR;
  inputElementValue = INITIAL_COLOR;
  setElementColor(pageTitleElement, "unset");
}

function handleSubmit() {
  console.log(inputElementValue);
  setElementColor(pageTitleElement, inputElementValue); 
}

function blueText() {
  setInputElementValue("blue");
  setElementColor(pageTitleElement, "blue");
}

function greenText() {
  setInputElementValue("green");
  setElementColor(pageTitleElement, "green");
}

function redText() {
  setInputElementValue("red");
  setElementColor(pageTitleElement, "red");
}

function setElementColor(element, color) {
  element.style.color = color;
}

function setInputElementValue(value) {
  setElementValue(inputElement, value);
}

function setElementValue(element, value) {
  element.value = value;
}
