export const settings = {
    colorMode: "light"
};

export const updateSettings = function() {
    if (settings.colorMode === "light") {
        settings.colorMode = "dark";
    } else {
        settings.colorMode = "light";
    }
};