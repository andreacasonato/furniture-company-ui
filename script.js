// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".hamburger i");

hamburger.addEventListener("click", () => {
  // Toggle the 'active' class on the nav
  nav.classList.toggle("active");

  // Check if the menu is open
  if (nav.classList.contains("active")) {
    // Menu is open, show X icon
    hamburgerIcon.className = "fa-solid fa-xmark";
  } else {
    // Menu is closed, show hamburger icon
    hamburgerIcon.className = "fa-solid fa-bars";
  }
});

// Close hamburger menu when clicking outside
// Listening for clicks on the entire page
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove("active");
    hamburgerIcon.className = "fa-solid fa-bars";
  }
});
