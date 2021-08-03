let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;

var r = document.querySelector(":root");

function setupMetaElement(property, value, content) {
  var meta = document.createElement("meta");
  meta.setAttribute(property, value);
  meta.content = content;
  document.getElementsByTagName("head")[0].appendChild(meta);
}

function set_colors() {
  if (r.classList.contains("dark")) {
    r.classList.remove("dark");
    r.classList.add("light");
  } else {
    r.classList.remove("light");
    r.classList.add("dark");
  }
}

function btn_change() {
  var mode_switch_btn = document.querySelector("#mode-selector");

  if (mode_switch_btn.innerHTML === '<i class="bx bxs-sun"></i>') {
    mode_switch_btn.innerHTML = '<i class="bx bxs-moon"></i>';
  } else {
    mode_switch_btn.innerHTML = '<i class="bx bxs-sun"></i>';
  }
}

if (matched) {
  r.classList.add("dark");
  setupMetaElement("name", "theme-color", "#04002e");
} else {
  r.classList.add("light");
  setupMetaElement("name", "theme-color", "#aba3ff");
}

function switch_color_scheme() {
  // set_colors();
  btn_change();
}




// r.style.setProperty("--main-background-color", "hsl(245, 30%, 9%)");
// r.style.setProperty("--secondary-background-color", "hsl(245, 30%, 18%)");
// r.style.setProperty("--main-text-color", "hsl(245, 30%, 82%)");
// r.style.setProperty("--secondary-text-color", "hsl(245, 30%, 91%)");

// r.style.setProperty("--main-text-color", "hsl(245, 30%, 9%)");
// r.style.setProperty("--secondary-text-color", "hsl(245, 30%, 18%)");
// r.style.setProperty("--main-background-color", "hsl(245, 30%, 82%)");
// r.style.setProperty("--secondary-background-color", "hsl(245, 30%, 91%)");