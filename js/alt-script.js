let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
var sections = document.getElementsByClassName("col-mode");

function setupMetaElement(id, id_value, property, value, content) {
  var meta = document.createElement("meta");
  meta.setAttribute(id, id_value);
  meta.setAttribute(property, value);
  meta.content = content;
  document.getElementsByTagName("head")[0].appendChild(meta);
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
  setupMetaElement("id", "theme-color", "name", "theme-color", "#04002e");
} else {
  setupMetaElement("id", "theme-color", "name", "theme-color", "#aba3ff");
}

function switch_color_scheme() {
  btn_change();
}
