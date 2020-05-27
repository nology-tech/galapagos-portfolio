import { toggleColor } from "./toggleColor.js";

window.onload = () => {
    document.getElementById("colorToggle").addEventListener("click", toggleColor);
};