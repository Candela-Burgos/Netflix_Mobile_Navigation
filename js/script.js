const btnOpen = document.querySelector(".open-btn");
const btnClose = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");

btnOpen.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

btnClose.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});
