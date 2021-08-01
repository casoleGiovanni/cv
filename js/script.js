var sections = document.querySelectorAll(".col-mode");
let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (matched) {
  sections.forEach((element) => {
    element.classList.add("dark");
  });
} else {
  sections.forEach((element) => {
    element.classList.add("light");
  });
}

function color_changes() {
  sections.forEach((element) => {
    if (element.classList.contains("dark")) {
      element.classList.remove("dark");
      element.classList.add("light");
    } else {
      element.classList.remove("light");
      element.classList.add("dark");
    }
  });
}

function btn_change() {
  var mode_switch_btn = document.querySelector("#mode-selector");

  if (mode_switch_btn.innerHTML === '<i class="bx bxs-sun"></i>') {
    mode_switch_btn.innerHTML = '<i class="bx bxs-moon"></i>';
  } else {
    mode_switch_btn.innerHTML = '<i class="bx bxs-sun"></i>';
  }
}

function switch_style_mode() {
  color_changes();
  btn_change();
}
