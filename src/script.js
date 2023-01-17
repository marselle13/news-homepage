const menu = document.getElementById("menu");
const close = document.getElementById("close");
const defaultModal = document.getElementById("defaultModal");
const body = document.querySelector("body");

menu.addEventListener("click", function () {
  defaultModal.classList.remove("hidden");
  body.classList.add("overflow-hidden");
});

close.addEventListener("click", function () {
  defaultModal.classList.add("hidden");
  body.classList.remove("overflow-hidden");
});
