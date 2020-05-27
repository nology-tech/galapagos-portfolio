const toggle = () => {
  let navBarClasses = document.getElementById('nav-bar');
console.log(navBarClasses)
  if (navBarClasses.classList.contains("show")) {
    navBarClasses.classList.remove("show");
  } else {
    navBarClasses.classList.add("show");
  }
}


console.log('abc def ghi')

console.log('abc def ghi'.includes('abc'))