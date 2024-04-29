const message = document.querySelector(".scroll_bottom_message");

function showMessage() {
  message.style.display = "block";
}

function hideMessage() {
  message.style.display = "none";
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = document.documentElement.clientHeight;
  if (scrollTop + clientHeight >= scrollHeight) {
    showMessage();
  } else {
    hideMessage();
  }
});
