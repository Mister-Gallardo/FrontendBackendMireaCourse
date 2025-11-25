const scrollBtn = document.querySelector(".scroll-to-top");

scrollBtn.classList.add("hidden");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});
