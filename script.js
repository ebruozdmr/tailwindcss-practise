const menu = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
const nav = document.getElementById("nav");

function handleClickListener() {
  if (menuList.classList.contains("hidden")) {
    menuList.classList.remove("hidden");
    nav.classList.add("bg-white");
  } else {
    menuList.classList.add("hidden");
    nav.classList.remove("bg-white");
  }
}

menu.addEventListener("click", handleClickListener);

document.addEventListener("DOMContentLoaded", function () {
  menuList.classList.add("hidden");
});
