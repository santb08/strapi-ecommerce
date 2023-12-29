const theme = {
  colors: {
    primary700: '#84339e',
    primary600: '#903ca7',
    primary500: '#9842ae',
    primary200: '#c7a7d2',
    primary100: '#dbcbe1',

    secondary700: '#508537',
    secondary600: '#5c9741',
    secondary500: '#66a549',
    secondary200: '#b2cfa7',
    secondary100: '#d1e1cb',

    danger100: '#24292d', // TOGGLE OFF BG
    danger700: '#bf4c69', // TOGGLE OFF COLOR
    neutral0: '#f1eaf3', // BACKGROUND SIDEBAR
    neutral100: '#dbcbe1', // BACKGROUND CONTENT
    neutral150: '#c7a7d2', // DISABLED BUTTON BG
    neutral200: '#c7a7d2', // LINE THROUGH MIDDLE
    neutral500: '#9842ae', // MENU IDLE COLOR
    neutral600: '#903ca7', // MENU HOVER COLOR
    neutral700: '#84339e', // MENU ACTIVE ICON COLOR
    neutral800: '#7a2c97', // TITLE COLORS
    neutral900: '#6a1d89', // TOOLTIP BG
  }
};

const config = {
  theme: {
    dark: theme,
    light: theme,
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
