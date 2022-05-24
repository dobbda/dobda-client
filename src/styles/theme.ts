
const media = {
  xLarge: `(max-width: 1200px)`,
  large: `(max-width: 990px)`,
  medium: `(max-width: 768px)`,
  small: `(max-width: 574px)`,
  size: "500px",
};

const color = {
  main: '#000000',
  q_header: '#000000',
  q_body: '#000000',
  b_bot: '#000000',
}

export const theme = {
  media,
  color
}


export type Theme = typeof theme;