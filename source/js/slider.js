const slider = document.querySelector(".js-slider");
const sliderRange = document.querySelector(".js-slider__range");

sliderRange.oninput = function () {
  slider.style.setProperty("--slider-value", sliderRange.value + "%");
};
