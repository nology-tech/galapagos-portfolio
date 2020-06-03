const toggleMenu = () => {
    let navB = document.getElementById("navb");
    if (navB.classList.contains("show")) {
      navB.classList.remove("show");
    } else {
      navB.classList.add("show");
    }
  }