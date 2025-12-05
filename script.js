const menu_icon = document.getElementById("menu_icon");
const dropdown_menu = document.getElementById("dropdown_menu");

menu_icon.addEventListener("click", () => {
  if (menu_icon.classList.contains("bi-list")) {
    menu_icon.classList.remove("bi-list");
    menu_icon.classList.add("bi-x-lg");
    dropdown_menu.classList.remove("hidden");
    dropdown_menu.classList.add("flex");
  } else {
    menu_icon.classList.remove("bi-x-lg");
    menu_icon.classList.add("bi-list");
    dropdown_menu.classList.add("hidden");
    dropdown_menu.classList.remove("flex");
  }
});
