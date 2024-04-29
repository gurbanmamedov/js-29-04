let prevScrollPos = window.scrollY;
const navbar = document.querySelector(".sticky-nav");

window.addEventListener("scroll", () => {
  const currentScrollpos = window.scrollY;
  if (prevScrollPos > currentScrollpos) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
  prevScrollPos = currentScrollpos;
});
