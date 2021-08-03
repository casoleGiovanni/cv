function mode_sel_icon_change() {
  var mode_select_btn = document.getElementById("mode-selector");

  if (mode_select_btn.innerHTML === '<i class="bx bxs-sun"></i>') {
    mode_select_btn.innerHTML = '<i class="bx bxs-moon"></i>';
  } else {
    mode_select_btn.innerHTML = '<i class="bx bxs-sun"></i>';
  }
}

function mode_switcher() {
  var mode_style = document.getElementById("mode-style");
  var hrefAttr = mode_style.getAttribute("href");

  if (hrefAttr === "css/dark-mode-style.css") {
    hrefAttr = "css/light-mode-style.css";
  } else {
    hrefAttr = "css/dark-mode-style.css";
  }

  mode_style.setAttribute("href", hrefAttr);
}
