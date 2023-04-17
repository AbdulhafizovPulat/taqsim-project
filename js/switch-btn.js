const elSwitch = document.querySelector("#turn-btn");
const blocks = [5];

elSwitch.addEventListener("click", (evt) => {
  const switchBtn = evt.target;
  if (switchBtn.className.includes("btn-s")) {
    if (switchBtn.className.includes("switch-on")) {
      switchBtn.className = "btn-s switch-btn";
    } else {
      switchBtn.className = "btn-s switch-btn switch-on";
    }
  }
});

const elSwitchBtn = document.querySelector("#turn-on");
const btnRange = [1];

elSwitchBtn.addEventListener("click", (evt) => {
  const elSwitchBtn = evt.target;
  if (elSwitchBtn.className.includes("btn-s")) {
    if (elSwitchBtn.className.includes("switch-on")) {
      elSwitchBtn.className = "btn-s switch-btn";
    } else {
      elSwitchBtn.className = "btn-s switch-btn switch-on";
    }
  }
});
