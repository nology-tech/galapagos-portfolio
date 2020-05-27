const expand = (x) => {
  x.classList.toggle("change");
  const mainNav = document.getElementById("dropdown");
  mainNav.classList.toggle("show");
}