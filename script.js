const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
let menuLinks = document.querySelectorAll(".responsive_link");

const toggleMenu = () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
};

burger.addEventListener("click", () => {
  toggleMenu();
});

console.log(menuLinks);

menuLinks.forEach(function (elem) {
  elem.addEventListener("click", function () {
    toggleMenu();
  });
});
