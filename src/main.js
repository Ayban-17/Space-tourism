const showMenu = document.getElementById("menu-icon");
const hideMenu = document.getElementById("close-icon");
const navBarEl = document.querySelector(".home__navbar");
const logo = document.getElementById("logo");

let mainData;

logo.addEventListener("click", () => {
  window.location.href = "index.html";
});

showMenu.addEventListener("click", () => {
  navBarEl.classList.remove("hidden");
});
hideMenu.addEventListener("click", () => {
  navBarEl.classList.add("hidden");
});

const fetchData = async () => {
  try {
    mainData = await fetch("data.json").then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};

const goTo = (url) => {
  window.location.href = url;
};
