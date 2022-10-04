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

// All this logic will be for the user chosen the tariff and then putting his number and send a message to the telegram.
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");
const overlay = document.querySelector(".overlay");
const btnCloseModal2 = document.querySelector(".btnCloseModals");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsProduct = document.querySelectorAll(".choseProductBtn");
const userPhoneNum = document.querySelector(".PhoneNumInput");
const btnSendRequst = document.querySelector(".btnSendTele");
let productName;

// Our Main bot address that we will send a message later..
const bot = new Bot(
  "5730249668:AAGvnXi32p-5K-9JZnsEbwwYXRxmSi2v5aY",
  -812859785
);

btnsProduct.forEach((ele) =>
  ele.addEventListener("click", (event) => {
    productName = event.target.value;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  })
);

btnSendRequst.addEventListener("click", (event) => {
  const userNumber = userPhoneNum.value;

  if (userNumber.trim() === "") return;

  bot.sendMessage(`${productName} ${userNumber}`).then((res) => {
    console.log(res);
  });

  closeModal();

  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Close the modal
const closeModal = function () {
  modal.classList.add("hidden");
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Calling the closeModal function on click and also when the user clicks anywhere on the overlay.
btnCloseModal.addEventListener("click", closeModal);

// Close the second modal

btnCloseModal2.addEventListener("click", () => {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
  userPhoneNum.value = "";
});
