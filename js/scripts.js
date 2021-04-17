document.querySelectorAll(".show-more").forEach(function (button) {
  button.addEventListener("click", function () {
    button.previousElementSibling.classList.toggle("isVisible");
  });
});
