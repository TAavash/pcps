let titleElement = document.getElementById("heading");
console.log(titleElement.textContent);
let content = titleElement.textContent;

let readingParagraph = document.getElementsByClassName("reading");
console.log(readingParagraph);
// console.log(readingParagraph[0].textContent)
// console.log(readingParagraph[0].innerHTML)

// console.log(content)
content = "Hello ChatGpt";
console.log(content);

let paraElm = document.querySelectorAll(".reading");
console.log(paraElm);
// console.log(paraElm[0].innerHTML="Hello ChatGpt")
// console.log(paraElm[1].innerHTML="Hello ChatGpt2")

for (i in paraElm) {
  console.log((paraElm[i].innerHTML = "Hello ChatGpt"));
}
