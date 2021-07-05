document.querySelectorAll(".show-more").forEach(button => {
  button.addEventListener("click", function () {
    button.previousElementSibling.classList.toggle("isVisible");
    if (button.innerText === "Read more") {
      button.innerText = "Read less";
    } else {
      button.innerText = "Read more";
    }
  });
});

imageHeight = document.getElementById('hero').clientHeight;

// if (isMobile)       
document.getElementById('hero').setAttribute("style", "height:" + imageHeight + "px");