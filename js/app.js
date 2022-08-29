jQuery(document).ready(function ($) {
  const $rangeslider = $(".calculate__range__form");
  const $amount = $(".calculate__amount__input");
  const $amountAll = $(".calculate__range__price");

  $rangeslider
    .rangeslider({
      polyfill: true,
    })
    .on("input", function () {
      $amount[0].value = this.value;
    });

  $amount.on("input", function () {
    $rangeslider.val(this.value).change();
  });

  $rangeslider.change(function () {
    var newval = $(this).val();
    $amountAll.text(newval + " USD");
  });
});

let burgerBtn = document.querySelector(".burger__menu__box");
burger = document.querySelector(".burger__menu__inner");
burgerCross = document.querySelector(".cross");
header = document.querySelector(".header");
body = document.querySelector("body");

burgerBtn.addEventListener("click", function () {
  burger.classList.toggle("active__burger");
  header.classList.toggle("dark__bg");
  body.classList.toggle("scroll__none");
});
burgerCross.addEventListener("click", function () {
  burger.classList.toggle("active__burger");
  header.classList.toggle("dark__bg");
  body.classList.toggle("scroll__none");
});
