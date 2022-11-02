import { theme } from 'src/styles/Theme';
import styled from 'styled-components';

export const PrWrapper = styled.div<{ url: string }>`
  background-image: linear-gradient(rgba(0, 0, 255, 0.2), rgba(24, 2, 53, 0.3)), url(${({ url }) => url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 250px;
  width: 100%;
`;

export const Content = styled.div<{ secondImg?: string }>`
  max-width: ${theme.media.maxWidth};
  padding: 15px 10px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;

  > * {
    color: #fff;
    margin-bottom: 30px;
    user-select: none;
    font-weight: 600;
  }
  ${({ secondImg }) =>
    secondImg &&
    `
		background-image: url(${secondImg});
		background-repeat: no-repeat;
		background-position: right;
		background-size: contain;
	`}

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.3rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
`;

export const Area = styled.div`
  max-width: ${theme.media.maxWidth};
  height: 50px;
`;
