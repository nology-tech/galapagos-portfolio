export const toggleColor = function () {
    document.querySelectorAll("*").forEach(element => {
        if (element.style.backgroundColor === "") {
            element.style.backgroundColor = "black";
            element.style.color= "white";
        } else if (element.style.backgroundColor === "black") {
            element.style.backgroundColor = "";
            element.style.color= "black";
        }
    });   
};