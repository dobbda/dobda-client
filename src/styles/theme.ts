
const media = {
  maxWidth: `1200px`,
  large: `990px`,
  medium: `768px`,
  small: `574px`,
  minWidth: `360px`,
};

const color = {
  main2: "#00C6FF",
  main1: "#3282B8",
  qcard: "#00ADB5",
  rcard: "#BEAEE2"
}

export const theme = {
  media,
  color
}


export type Theme = typeof theme;