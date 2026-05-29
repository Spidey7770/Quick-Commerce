const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  dots[current].classList.remove("active");

  current = (current + 1) % slides.length;

  slides[current].classList.add("active");
  dots[current].classList.add("active");
}, 4000);

const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = "Added";
    setTimeout(() => {
      button.textContent = "Add to Cart";
    }, 1500);
  });
});
