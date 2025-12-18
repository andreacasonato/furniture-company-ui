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

// ANIMATED STATISTICS COUNTER

/*
- We're selecting the <span> inside each statistic box (that's where the numbers are)
- We're also selecting the entire statistics section to watch for scrolling
*/
const statCustomers = document.querySelector("#statistic-customers span");
const statYears = document.querySelector("#statistic-years span");
const statCountries = document.querySelector("#statistic-countries span");
const statisticsSection = document.querySelector(".statistics");

// Create an observer that watches the statistics section
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Animate each counter
      animateCounter(statCustomers, 7293, 2000); // 2 seconds
      animateCounter(statYears, 10, 2000);
      animateCounter(statCountries, 45, 2000);

      // Stop observing after animation starts (run only once)
      observer.unobserve(statisticsSection);
    }
  });
});

observer.observe(statisticsSection);

// COUNTING ANIMATION FUNCTION
function animateCounter(element, target, duration) {
  let start = 0;
  const increment = target / (duration / 16); // 16ms per frame (60fps)

  const timer = setInterval(() => {
    start += increment;

    if (start >= target) {
      element.textContent = target + "+"; // Final value with +
      clearInterval(timer); // Stop the timer
    } else {
      element.textContent = Math.floor(start); // Show current value
    }
  }, 16);
}

// FAQ ACCORDION
const faqBoxes = document.querySelectorAll(".faq-box");

// Loop through each FAQ box
faqBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Toggle the 'active' class
    box.classList.toggle("active");

    console.log("FAQ box clicked!", box);
  });
});
