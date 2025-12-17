const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".hamburger i");

console.log(hamburger);
console.log(nav);

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
