//menu button click

const primaryColor = "#6C63FF";
const secondaryColor ="#ABDCFF";

function menuButtonClick() {
  console.log("button was clicked");

  if(document.getElementById("welcome_text").style.visibility=="hidden"){
    enableScrolling()

    document.getElementById("menu_svg_bottom").style.visibility="hidden";
    document.getElementById("menu_svg_middle").style.visibility="hidden";
    document.getElementById("menu_svg_top").style.visibility="hidden";

    document.getElementById("menu_svg_bottom").style.opacity = 0;
    document.getElementById("menu_svg_bottom").style.transition = "1s";
    document.getElementById("menu_svg_middle").style.opacity = 0;
    document.getElementById("menu_svg_middle").style.transition = "1s";
    document.getElementById("menu_svg_top").style.opacity = 0;
    document.getElementById("menu_svg_top").style.transition = "1s";
    document.getElementById("menu_items").style.opacity = 0;
    document.getElementById("menu_items").style.transition = "1s";

    document.getElementById("welcome_text").style.visibility="visible";
    document.getElementById("welcome_text").style.opacity = 1;
    document.getElementById("welcome_text").style.transition = "1s";

    document.getElementById("skills_background").style.visibility="visible";
    document.getElementById("skills_background").style.opacity = 1;
    document.getElementById("skills_background").style.transition = "1s";

    document.getElementById("portfolio_background").style.visibility="visible";
    document.getElementById("portfolio_background").style.opacity = 1;
    document.getElementById("portfolio_background").style.transition = "1s";

    document.getElementById("contact_background").style.visibility="visible";
    document.getElementById("contact_background").style.opacity = 1;
    document.getElementById("contact_background").style.transition = "1s";

    document.getElementById("menu_button").style.webkitFilter = "invert(88%) sepia(5%) saturate(1399%) hue-rotate(185deg) brightness(104%) contrast(104%) drop-shadow( 3px 3px 2px " + primaryColor;
  } else {

    disableScrolling();

    document.getElementById("menu_svg_bottom").style.visibility="visible";
    document.getElementById("menu_svg_middle").style.visibility="visible";
    document.getElementById("menu_svg_top").style.visibility="visible";


    document.getElementById("menu_svg_bottom").style.opacity = 0.5;
    document.getElementById("menu_svg_bottom").style.transition = "1.5s";
    document.getElementById("menu_svg_middle").style.opacity = 0.5;
    document.getElementById("menu_svg_middle").style.transition = "1.5s";
    document.getElementById("menu_svg_top").style.opacity = 1;
    document.getElementById("menu_svg_top").style.transition = "1.5s";
    document.getElementById("menu_items").style.opacity = 1;
    document.getElementById("menu_items").style.transition = "1.5s";
     
    document.getElementById("welcome_text").style.visibility="hidden";
    document.getElementById("welcome_text").style.opacity = 0;
    document.getElementById("welcome_text").style.transition = "0.3s";

    document.getElementById("skills_background").style.visibility="hidden";
    document.getElementById("skills_background").style.opacity = 0;
    document.getElementById("skills_background").style.transition = "0.3s";

    document.getElementById("portfolio_background").style.visibility="hidden";
    document.getElementById("portfolio_background").style.opacity = 0;
    document.getElementById("portfolio_background").style.transition = "0.3s";

    document.getElementById("contact_background").style.visibility="hidden";
    document.getElementById("contact_background").style.opacity = 0;
    document.getElementById("contact_background").style.transition = "0.3s";

    document.getElementById("menu_button").style.webkitFilter = "invert(37%) sepia(77%) saturate(928%) hue-rotate(215deg) brightness(99%) contrast(107%) drop-shadow( 0px 0px 2px " + secondaryColor;
  }
}

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}

function menuItemClicked(){
  enableScrolling()

  document.getElementById("menu_svg_bottom").style.visibility="hidden";
  document.getElementById("menu_svg_middle").style.visibility="hidden";
  document.getElementById("menu_svg_top").style.visibility="hidden";

  document.getElementById("menu_svg_bottom").style.opacity = 0;
  document.getElementById("menu_svg_bottom").style.transition = "1s";
  document.getElementById("menu_svg_middle").style.opacity = 0;
  document.getElementById("menu_svg_middle").style.transition = "1s";
  document.getElementById("menu_svg_top").style.opacity = 0;
  document.getElementById("menu_svg_top").style.transition = "1s";
  document.getElementById("menu_items").style.opacity = 0;
  document.getElementById("menu_items").style.transition = "1s";

  document.getElementById("welcome_text").style.visibility="visible";
  document.getElementById("welcome_text").style.opacity = 1;
  document.getElementById("welcome_text").style.transition = "1s";

  document.getElementById("skills_background").style.visibility="visible";
  document.getElementById("skills_background").style.opacity = 1;
  document.getElementById("skills_background").style.transition = "1s";

  document.getElementById("portfolio_background").style.visibility="visible";
  document.getElementById("portfolio_background").style.opacity = 1;
  document.getElementById("portfolio_background").style.transition = "1s";

  document.getElementById("contact_background").style.visibility="visible";
  document.getElementById("contact_background").style.opacity = 1;
  document.getElementById("contact_background").style.transition = "1s";

  document.getElementById("menu_button").style.webkitFilter = "invert(88%) sepia(5%) saturate(1399%) hue-rotate(185deg) brightness(104%) contrast(104%) drop-shadow( 3px 3px 2px " + primaryColor;
}

