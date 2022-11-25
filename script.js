// Main function that is responsible for scroling the whole page
const scroll = new SmoothScroll('a[href*="#"]');

// Selecting the elements for the tarrifes product (phone version)
const itemAll = document.querySelectorAll(".item");
const parentElement = document.querySelector(".accordion");

// Main function that is responsible for toggling the tarrife accordion.
parentElement.addEventListener("click", (e) => {
  const clicked = e.target.closest(".item");
  clicked.classList.toggle("open");
});

// This code for makeing the mobile navigation works....
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// Simple function we use it when the user clicks on one of navigation links, we scroll smothly to the needed section.
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    e.preventDefault();

    // Matching strategy so that we can scroll to the needed section.
    if (
      e.target.classList.contains("main-nav-link") ||
      "navLinkDeskT" ||
      "navLinkPhoneT"
    ) {
      headerEl.classList.toggle("nav-open");
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

// Toggling the open/close button
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
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
