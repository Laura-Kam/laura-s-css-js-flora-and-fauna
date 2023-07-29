// Index 0 needed as otherwise textContent targets a collection of elements
const navItemOne = document.getElementsByClassName("main-nav__item1")[0];
navItemOne.textContent = "Blog Posts";

console.log(
  "This is what my textContent has targetted with index 0: " +
    navItemOne.textContent
);
