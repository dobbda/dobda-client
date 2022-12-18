const media = {
  minWidth: `360px`,
  maxWidth: '1240px',
  large: `1080px`,
  medium: `788px`,
  tablet: `788px`,
  small: `574px`, //card culumn
  cardMinWidth: '320px',
  cardMaxWidth: '450px',
  navbarWidth: '240px',
  navbarMobiHeight: '50px',
  headerHeight: '55px',
};

const color = {
  bg: '#fff', //"#EAEEF2",'#fafbfc',  //background color
  header: '#fff',
  primary: '#18baaa',
  prRgb: (per: number) => `rgba(12, 192, 152, ${per})`,
  seRgb: (per: number) => `rgba(158, 8, 218, ${per})`,
  secondary: 'rgb(158, 8, 218)',
  text1: (per: number) => `rgba(0, 0, 0, ${per})`,
  placeholder: `rgba(142, 142, 142, 1)`,
  border1: '#c9c9c9',
  border2: '#dddddd',
  border3: '#eeeeee',
  border: (per: number) => `rgba(0, 0, 0, ${per})`,
  color1: 'rgba(0, 0, 0, 1)',
  color2: 'rgba(46, 46, 46, 1)',
  color3: 'rgba(63, 63, 63, 1)',
  button: '#199DE8',
  coin: '#8400EC',
};

export const theme = {
  media,
  color,
};

export type Theme = typeof theme;
