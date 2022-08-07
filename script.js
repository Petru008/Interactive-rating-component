console.log("Hello world!");

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

const button = document.querySelector(".button__1");
const cont_1 = document.querySelector(".cont_1");
button.addEventListener("click", function () {
  cont_1.classList.add("active");
  cont_1.classList.remove("pop_up");
});
