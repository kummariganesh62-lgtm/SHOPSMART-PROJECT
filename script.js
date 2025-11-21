const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav-links a");

toggle?.addEventListener("click", () => {
  nav?.classList.toggle("open");
});

links.forEach((link) => {
  link.addEventListener("click", () => nav?.classList.remove("open"));
});

const form = document.querySelector(".reserve-form");
const dateInput = document.querySelector("#res-date");
const guestsInput = document.querySelector("#res-count");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const date = dateInput?.value;
  const guests = guestsInput?.value || "2";

  if (!date) {
    alert("Please select a date for your reservation.");
    return;
  }

  alert(`Reservation request received for ${guests} guests on ${date}.`);
  form.reset();
});

const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

