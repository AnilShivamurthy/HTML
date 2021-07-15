// Wait for document to load
document.addEventListener("DOMContentLoaded", function (event) {
  document.documentElement.setAttribute("data-theme", "light");

  // Get our button switcher
  var themeSwitcher = document.getElementById("theme-switcher");

  // When our button gets clicked
  themeSwitcher.onclick = function () {
    // Get the current selected theme, on the first run
    // it should be `light`
    var currentTheme = document.documentElement.getAttribute("data-theme");

    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark";

    // Set our currenet theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
  };
});



function changeFontSize(target) {
    console.log("hi");
    var demo = document.getElementById("demo");
    var computedStyle = window.getComputedStyle
          ? getComputedStyle(demo) // Standards
          : demo.currentStyle;     // Old IE
    var fontSize;
  
    if (computedStyle) { // This will be true on nearly all browsers
        fontSize = parseFloat(computedStyle && computedStyle.fontSize);
  
        if (target == document.getElementById("button1")) {
          fontSize += 1;
        } else if (target == document.getElementById("button2")) {
          fontSize -= 1;
        }
        demo.style.fontSize = fontSize + "px";
    }
  }