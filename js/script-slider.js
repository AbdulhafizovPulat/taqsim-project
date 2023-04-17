const sliderRange = document.querySelector("#slider");

if (sliderRange) {
  noUiSlider.create(sliderRange, {
    start: [500000, 12000000],
    connect: true,
    step: 1,
    range: {
      min: [500000],
      max: [12000000],
    },
  });

  const elInput0 = document.querySelector("#price-from");
  const elInput1 = document.querySelector("#price-before");
  const inputArray = [elInput0, elInput1];

  sliderRange.noUiSlider.on("update", function (values, handle) {
    inputArray[handle].value = Math.round(values[handle]);
  });
}
