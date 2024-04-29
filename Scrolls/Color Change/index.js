function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColorOnScroll() {
  const body = document.body;
  const scrollHandler = _.throttle(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 300);

  window.addEventListener("scroll", scrollHandler);
  window.addEventListener("beforeunload", () => {
    window.removeEventListener("scroll", scrollHandler);
  });
}



changeBackgroundColorOnScroll()