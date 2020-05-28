import { toggleColor } from "./toggleColor.js";
import { toggleGradient } from "./toggleGradient.js";
import { updateSettings } from "./settings.js";

window.onload = () => {
    document.getElementById("colorToggle").addEventListener("click", () => {
    toggleColor();
    toggleGradient();
    updateSettings();
});
};
