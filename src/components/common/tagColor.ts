export const tagColors = {
  red: {
    color: '#cf1322',
    background: '#fff1f05d',
    borderColor: '#ffa39e',
  },

  volcano: {
    color: '#d4380d',
    background: '#fff2e85d',
    borderColor: '#ffbb96',
  },

  orange: {
    color: '#d46b08',
    background: '#fff7e65d',
    borderColor: '#ffd591',
  },

  yellow: {
    color: '#d4b106',
    background: '#feffe65d',
    borderColor: '#dfdb67',
  },

  gold: {
    color: '#d48806',
    background: '#fffbe65d',
    borderColor: '#ffe386',
  },

  cyan: {
    color: '#08979c',
    background: '#e6fffb5d',
    borderColor: '#87e8de',
  },

  lime: {
    color: '#7cb305',
    background: '#fcffe65d',
    borderColor: '#bad63a',
  },

  green: {
    color: '#389e0d',
    background: '#f6ffed5d',
    borderColor: '#b7eb8f',
  },

  blue: {
    color: '#096dd9',
    background: '#e6f7ff5d',
    borderColor: '#91d5ff',
  },

  geekblue: {
    color: '#1d39c4',
    background: '#f0f5ff5d',
    borderColor: '#adc6ff',
  },

  purple: {
    color: '#531dab',
    background: '#f9f0ff5d',
    borderColor: '#d3adf7',
  },
  magenta: {
    color: '#c41d7f',
    background: '#fff0f65d',
    borderColor: '#ffadd2',
  },
  yellowgreen: {
    color: '#95ce24',
    background: '#f8ffeb5d',
    borderColor: '#caf378',
  },
  primary: {
    color: 'rgba(28,154,206,1)',
    background: 'rgba(28,154,206,0.1)',
    borderColor: 'rgba(28,154,206,0.3)',
  },
};

export type TagColorType = keyof typeof tagColors;

export let TagColorKey = Object.keys(tagColors);
