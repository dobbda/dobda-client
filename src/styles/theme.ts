
const media = {
  maxWidth: `1200px`,
  large: `1080px`,
  medium: `768px`,
  small: `574px`, //card culumn
  minWidth: `360px`,
  cardMinWidth: "320px",
  cardMaxWidth: "450px",
};

const color = {
  bg: "#EAEEF2", //background color
  card: "#fff",
  primary:"#33404D",
  secondary:"#465666",
  border: "#c9c9c9",
  border2:  "#e3e3e3",
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