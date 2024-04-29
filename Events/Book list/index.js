const bookList = document.querySelector(".book__list");
let shiftClicked = false;
let ctrlClicked = false;
let lastSelectedIndex = null;

bookList.addEventListener("click", (event) => {
  const clickedIndex = [...bookList.children].indexOf(event.target);
  ctrlClicked = event.ctrlKey;
  shiftClicked = event.shiftKey;
  if (!ctrlClicked && !shiftClicked) {
    clearSelection();
  }
  if (shiftClicked && lastSelectedIndex !== null) {
    selectRange(lastSelectedIndex, clickedIndex);
  } else {
    event.target.classList.toggle("selected");
  }
  if (!ctrlClicked) {
    lastSelectedIndex = clickedIndex;
  }
});

function selectRange(startIndex, endIndex) {
  const minIndex = Math.min(startIndex, endIndex);
  const maxIndex = Math.max(startIndex, endIndex);

  [...bookList.children].forEach((child, index) => {
    if (index >= minIndex && index <= maxIndex) {
      child.classList.toggle("selected");
    }
  });
}

function clearSelection() {
  [...bookList.children].forEach((child) => {
    child.classList.remove("selected");
  });
}
