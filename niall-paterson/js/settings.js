export const settings = {
  colorMode: 'light',
  menu: 'off'
};

export const updateSettings = function () {
  if (settings.colorMode === 'light') {
    settings.colorMode = 'dark';
  } else {
    settings.colorMode = 'light';
  }
};