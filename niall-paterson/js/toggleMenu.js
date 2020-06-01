export const toggleMenuVisibility = (settings) => {
  if (settings.menuVisible) {
    document.querySelector('nav').style.display = 'none';
    settings.menuVisible = false;
  } else {
    document.querySelector('nav').style.display = 'block';
    settings.menuVisible = true;
  }
};

