console.log("Hello world!");

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".note__review");
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

const button = document.querySelector(".button__1");
const cont = document.querySelector(".cont-1");
button.addEventListener("click", function () {
  cont.classList.add("active");
  cont.classList.remove("pop_up");
});

const a = document.querySelector(".note__review");
a.addEventListener("click", function () {
  a.classList.toggle("bColor");
  a.classList.toggle("note__review");
});

const click_2 = document.querySelector(".click_2");
click_2.addEventListener("click", function () {
  click_2.classList.toggle("bColor");
  click_2.classList.toggle("note__review");
});

const click_3 = document.querySelector(".click_3");
click_3.addEventListener("click", function () {
  click_3.classList.toggle("bColor");
  click_3.classList.toggle("note__review");
});

const click_4 = document.querySelector(".click_4");
click_4.addEventListener("click", function () {
  click_4.classList.toggle("bColor");
  click_4.classList.toggle("note__review");
  c;
});

const click_5 = document.querySelector(".click_5");
click_5.addEventListener("click", function () {
  click_5.classList.toggle("bColor");
  click_5.classList.toggle("note__review");
});
