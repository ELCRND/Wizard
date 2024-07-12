const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
// const aboutKey = document.querySelector("#about-key");
// const tooltip = document.querySelector(".tooltip");

// открыть/закрыть меню
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menuBtn.classList.toggle("close");
  document.body.classList.toggle("scroll-off");
});

// закрытие меню при нажатии на ссылку
// document.querySelectorAll(".menu__link").forEach((link) =>
//   link.addEventListener("click", () => {
//     menu.classList.remove("visible");
//     menuBtn.classList.remove("close");
//     document.body.classList.remove("scroll-off");
//   })
// );

// копирование кода в буфер обмена
// document.querySelector("#about-key-copy").addEventListener("click", () => {
//   navigator.clipboard.writeText(aboutKey.innerText);
//   tooltip.classList.add("visible");
//   setTimeout(() => tooltip.classList.remove("visible"), 400);
// });

// document.querySelector("#footer-key-copy").addEventListener("click", () => {
//   navigator.clipboard.writeText(footerKey.innerText);
//   tooltip.classList.add("visible");
//   setTimeout(() => tooltip.classList.remove("visible"), 400);
// });
