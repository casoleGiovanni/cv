let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;

var r = document.querySelector(":root");

if (matched) {
  r.classList.add("dark");
} else {
  r.classList.add("light");
}

// function set_colors(){
//     alert("you clicked the button");
// }

// function switch_color_scheme() {
//   set_colors();
//   btn_change();
// }
