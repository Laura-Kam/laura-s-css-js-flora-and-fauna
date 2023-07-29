const form = document.getElementById("form");

const clientName = document.getElementById("clientName");

const surname = document.getElementById("surname");

const email = document.getElementById("email");

// event listener prevents default - refreshing page, getting rid of values.
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitted");
  console.log(clientName.value);
  console.log(surname.value);
  console.log(email.value);
});

// function marriageProposal(name) {
//   console.log("He said yes - Of course I will marry you " + name);
// }

// setInterval(marriageProposal, 5000, "Laura");

console.log("window" + window.innerHeight);
console.log("window" + window.innerWidth);
