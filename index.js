const mobile_nav = document.getElementsByClassName("mobile-navbar-btn");
const nav_header = document.querySelector("header");

const toggleNavbar = () => {
  console.log("Hello!!");
  nav_header.classList.toggle("active");
};

mobile_nav[0].addEventListener("click", () => toggleNavbar());
