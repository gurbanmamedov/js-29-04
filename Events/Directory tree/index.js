const folders = document.querySelectorAll(".folder");

folders.forEach((folder) => {
  folder.addEventListener("click", () => {
    folder.parentElement.classList.toggle("expanded");
    folder.parentElement.classList.toggle("collapsed");
  });
});
