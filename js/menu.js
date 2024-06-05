let aside = document.querySelector(".layout__aside");
let button = document.querySelector(".layout__menu-toggle");
let icon = document.querySelector(".menu-toggle__icon");
let layout = document.querySelector(".layout");

button.addEventListener("click", (event) => {
  let visible = document.querySelector(".layout__aside--active");
  if (!visible) {
    aside.classList.add("layout__aside--active");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    aside.classList.remove("layout__aside--active");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

//SOLVE IT
icon.addEventListener("click", (event) => {
  let visible = aside.classList.contains("layout__aside--active");
  if (!visible) {
    aside.classList.add("layout__aside--active");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    aside.classList.remove("layout__aside--active");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

//TO CLOSE MENU WHEN CLICKING OUTSIDE OF IT
layout.addEventListener("click", (event) => {
  if (
    aside.classList.contains("layout__aside--active") &&
    event.target != aside &&
    event.target != button
  ) {
    aside.classList.remove("layout__aside--active");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  }

});


//HIDE MENU ON RESIZE SCREEN
window.addEventListener("resize", () => {
 let size = parseInt(document.body.clientWidth);
 if(size < 1060){
    aside.classList.remove("layout__aside--active");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

 }
})