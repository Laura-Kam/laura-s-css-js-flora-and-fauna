console.log("It works chill");

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// declaring variables from ids

// const questionBtn = document.getElementById("questionButton");
// const answerP = document.getElementById("answerParagraph");

// //create an event listener.

// questionBtn.addEventListener("click", function showAnswer() {
//   //the problem here was I have to start with 'none'
//   if (answerP.style.display == "none") {
//     answerP.style.display = "block";
//   } else {
//     answerP.style.display = "none";
//   }
// });

//The error here was I was a comparison operator, not an assignment operator to change display property.
const asideQuestion = document.getElementById("asideQuestion");
const asideAnswer = document.getElementById("asideAnswer");

asideQuestion.addEventListener("click", function revealAnswer() {
  if (asideAnswer.style.display === "none") {
    asideAnswer.style.display = "block";
  } else {
    asideAnswer.style.display = "none";
  }
});
