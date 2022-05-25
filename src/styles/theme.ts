
const media = {
  maxWidth: `1200px`,
  large: `990px`,
  medium: `768px`,
  small: `574px`,
  minWidth: `360px`,
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