import { settings } from "./settings.js";

export const toggleColor = function () {
    document.querySelectorAll("*").forEach(element => {
        if (settings.colorMode === "light") {
            element.style.backgroundColor = "black";
            element.style.color = "white"; 
        } else {
            element.style.backgroundColor = "";
            element.style.color = "black";
        }
    });
};