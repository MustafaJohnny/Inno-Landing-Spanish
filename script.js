// Main function that is responsible for scroling the whole page
const scroll = new SmoothScroll('a[href*="#"]');

// Selecting the elements for the tarrifes product (phone version)
const itemAll = document.querySelectorAll(".item");
const parentElement = document.querySelector(".accordion");

// Main function that is responsible for toggling the tarrife accordion.
parentElement.addEventListener("click", (e) => {
  const clicked = e.target.closest(".item");
  clicked.classList.toggle("open");

  //   itemAll.forEach((ele) => ele.classList.remove("open"));
  //   e.preventDefault();
});

// Mobile navigation work and logic
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// Toggling the open/close button
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation For Mobile
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");

    if (link.classList.contains("navLinkPhoneT"))
      headerEl.classList.toggle("nav-open");
  });
});
