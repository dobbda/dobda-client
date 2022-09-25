const media = {
  minWidth: `360px`,
  maxWidth: '1200px',
  large: `1080px`,
  medium: `788px`,
  tablet: `788px`,
  small: `574px`, //card culumn
  cardMinWidth: '320px',
  cardMaxWidth: '450px',
  navbarWidth: '240px',
  navbarMobiHeight: '50px',
  headerHeight: '50px',
};

const color = {
  bg: '#fff', //"#EAEEF2", //background color
  card: '#fff',
  primary: '#05a983',
  prRgb: (per: number) => `rgba(5, 169, 131, ${per})`,
  seRgb: (per: number) => `rgba(158, 8, 218, ${per})`,
  secondary: 'rgb(158, 8, 218)',
  text1: (per: number) => `rgba(0, 0, 0, ${per})`,
  placeholder: `rgba(142, 142, 142, 1)`,
  border: '#c9c9c9',
  border2: '#e3e3e3',
  button: '#199DE8',
  coin: '#8400EC',
  date: '#b9b9b9',
  comment_border: '#cacaca',
  main2: '#00C6FF',
  main1: '#3282B8',
  Qcard: '#00C6FF',
  Rcard: '#BEAEE2',
};

export const theme = {
  media,
  color,
};

export type Theme = typeof theme;
