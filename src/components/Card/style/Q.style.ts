import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
// ({theme})=> theme.color
interface CardProps {
  type?: string;
  color?: string;
}

export const ContentWrapper = styled.div<CardProps>`
  border: solid 1px #eee;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  svg {
    font-size: 15px;
  }

  :hover {
    border: 1px solid ${theme.color.primary};
  }

  @media screen and (max-width: 450px) {
    padding: 20px 10px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  //스크롤 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: fit-content;
  text-align: center;
  align-items: center;
  p {
    padding: 0;
    margin: 0;
    color: #686868;
    font-size: 12px;
    white-space: nowrap;
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
  :hover {
    color: #23629f;
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
export const Gap = styled.div`
  display: inline;
  margin: 0 7px;
`;
