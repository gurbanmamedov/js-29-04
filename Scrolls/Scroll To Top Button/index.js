const scrollToTopBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  document.body.scrollTop > 300 || document.documentElement.scrollTop > 300
    ? (scrollToTopBtn.style.display = "block")
    : (scrollToTopBtn.style.display = "none");
});

scrollToTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});
