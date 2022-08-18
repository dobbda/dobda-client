
const media = {
  maxWidth: `1200px`,
  large: `1080px`,
  medium: `788px`,
  tablet: `788px`,

  small: `574px`, //card culumn
  minWidth: `360px`,
  cardMinWidth: "320px",
  cardMaxWidth: "450px",
  navbarWidth: "240px",
  navbarMobiHeight: "50px",
  headerHeight: "50px",
};

const color = {
  bg: "#fff",//"#EAEEF2", //background color
  card: "#fff",
  primary:"#3F4A5E",
  secondary:"#333C4D",
  border: "#c9c9c9",
  border2:  "#e3e3e3",
	button: "#199DE8",
  coin: "#8400EC",
  date: "#b9b9b9",
  comment_border: "#cacaca",
  main2: "#00C6FF",
  main1: "#3282B8",
  Qcard: "#00C6FF",
  Rcard: "#BEAEE2"
}

export const theme = {
  media,
  color
}


export type Theme = typeof theme;