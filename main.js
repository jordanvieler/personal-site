function flipOpen() {
    var nav = document.getElementById("nav");
    var menu = document.getElementById("menu")
    if (nav.className === "" ) {
      nav.className = "open";
      menu.innerText = "×"
    } else {
      nav.className = "";
      menu.innerText = "☰"
    }
  }
