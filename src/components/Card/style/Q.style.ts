import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
// ({theme})=> theme.color
interface CardProps {
  type?: string;
  color?: string;
}

export const ContentWrapper = styled.div<CardProps>`
  border: 1px solid ${theme.color.border2};
  box-shadow: 0 1px 6px 0 rgb(137 138 154 / 40%);
  box-sizing: border-box;
  padding: 20px 30px;
  background-color: #fff;
  svg {
    font-size: 15px;
  }

  :hover {
    border: 1px solid ${theme.color.border1};
  }

  @media screen and (max-width: 450px) {
    padding: 20px 10px;
  }
`;

// header
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;

//body
export const BodyWrapper = styled.div`
  width: 100%;
  padding-left: 45px;
`;

export const Title = styled.h3`
  overflow: hidden;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  word-break: break-all;
  max-height: 40px;
  display: inline-block;

  :hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

//footer
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap-reverse;
  width: 100%;
  text-align: center;
  align-items: center;
  margin-top: 10px;
  padding-left: 45px;
`;
