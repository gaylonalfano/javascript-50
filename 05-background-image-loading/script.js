const loadText = document.querySelector(".loading-text");
const background = document.querySelector(".bg");

let load = 0;

let interval = setInterval(blurring, 30);

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function blurring() {
  load++;

  // NOTE We want to increment in an interval of 30ms
  // Use clearInterval(interval) to stop
  if (load > 99) {
    clearInterval(interval);
  }

  loadText.innerText = `${load}%`;

  // Make the text fully opaque (0 - disappear) to not opaque (1 - solid)
  // Q: How to map one range to another range of numbers?
  // A: https://stackoverflow.com/a/23202637
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  console.log(load);
}
