//Query selectors and direct child combinators

firstSibling = document.querySelector("#parentElement > p");

//Practising nextElementSiblings
// secondSibling = firstSibling.nextElementSibling;

// console.log(secondSibling);

// const first = document.querySelector(".first");

// const findClassValue = first.getAttribute("class");

// console.log(findClassValue);

// const child = document.getElementsByClassName("first")[0]; // Access the first element with the class "first"

// const mySibling = child.nextElementSibling; // Retrieve the next sibling element

// mySibling.setAttribute("class", "this-is-the-second-another-list-item"); // Set the class attribute of the sibling element

//Practising textContent
// mySibling.textContent = "Learning";

// const item = document.getElementById("second-article");
// const value = item.childNodes[2].nodeValue;
// console.log(value);

//Practising textContent part 2 - changed nav item one to blog posts using the DOM.

//Index 0 needed as otherwise textContent targets a collection of elements
// const navItemOne = document.getElementsByClassName("main-nav__item1")[0];
// navItemOne.textContent = "Blog Posts";

// console.log(
//   "This is what my textContent has targetted with index 0: " +
//     navItemOne.textContent
// );

//Practising textContent part 3 - changed nav item one to blog posts using the DOM.

// const navItem2 = document.getElementsByClassName("main-nav__item2")[0];
// navItem2.textContent = "JS Projects";
