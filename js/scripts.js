document.querySelectorAll(".show-more").forEach(function(button) {
  button.addEventListener("click", function() {
    button.nextElementSibling.classList.toggle("isVisible");
  });
});
