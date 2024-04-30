const scrollButton = document.getElementById("scrollBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  const scrollTop = window.scrollY;
  if (scrollTop > 100) {
    scrollButton.style.display = "block";
    scrollButton.style.opacity = 1;
  } else {
    scrollButton.style.display = "none";
    scrollButton.style.transition = "opacity 0.3s ease";
    scrollButton.style.opacity = 0;
  }
}

scrollButton.addEventListener("mousedown", function () {
  setTimeout(function () {
    scrollButton.removeEventListener("mouseup", preventDefault);
  }, 100);
  scrollButton.addEventListener("mouseup", preventDefault);
});

function preventDefault(event) {
  event.preventDefault();
}

function topFunction() {
  const startTime = performance.now();
  const interval = setInterval(function () {
    const elapsedTime = performance.now() - startTime;
    if (elapsedTime > 500) {
      clearInterval(interval);
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 10);
}
