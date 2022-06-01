
const media = {
  maxWidth: `1200px`,
  large: `990px`,
  medium: `768px`,
  small: `574px`, //card culumn
  minWidth: `400px`,
  cardMinWidth: "320px",
  cardMaxWidth: "450px",
};

const color = {
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