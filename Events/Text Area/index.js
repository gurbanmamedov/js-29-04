const textDiv = document.querySelector(".text");
const editorTextArea = document.querySelector(".editor");

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "e") {
    event.preventDefault();
    textDiv.style.display = "none";
    editorTextArea.style.display = "block";
    editorTextArea.value = textDiv.innerText;
    editorTextArea.focus();
  }

  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();
    textDiv.innerText = editorTextArea.value;
    textDiv.style.display = "block";
    editorTextArea.style.display = "none";
  }
});
