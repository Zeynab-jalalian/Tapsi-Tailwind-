//menu
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

//filter
const filter_ul = document.getElementById("filter_ul");
const items = filter_ul.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", () => {


    items.forEach((li) => {
      li.querySelector("img").classList.add("opacity-[0.6]");
      li.querySelector("p").classList.add("opacity-[0.6]");
    });


    item.querySelector("img").classList.remove("opacity-[0.6]");
    item.querySelector("p").classList.remove("opacity-[0.6]");
  });
});
