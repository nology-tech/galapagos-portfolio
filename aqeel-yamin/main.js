const toggleMenu = () => {
    let mainnav = document.getElementById("navBar");
    if (mainnav.classList.contains("show")) {
        mainnav.classList.remove("show");
    } else {
        mainnav.classList.add("show");
    }
}