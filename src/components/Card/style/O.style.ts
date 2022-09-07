import styled from 'styled-components';
// ({theme})=> theme.color
interface CardProps {
  type?: string;
  color?: string;
}

export const ContentWrapper = styled.div<CardProps>`
  border-bottom: solid 1px #e3e3e3;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 4px;
  width: 100%;
  filter: drop-shadow(0px 2px 8px rgba(140, 140, 140, 0.25));
  .diff-styles {
    padding-left: 45px;
  }

  @media screen and (max-width: 450px) {
    padding: 20px 10px;
  }
`;

export const Progress = styled.h1`
  color: #b95792;
  font-size: 13px;
  /* font-weight: bold; */
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
  p {
    padding: 0;
    margin: 0;
    color: #686868;
    font-size: 12px;
    /* white-space: nowrap; */
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
`;

export const Title = styled.h3`
  overflow: hidden;
  margin: 0;
  padding: 0;
  font-style: normal;
  padding-bottom: 10px;
  font-size: 18px;
  word-break: break-word;

  :hover {
    color: #0057ff;
  }
`;

//footer
export const FooterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  width: 100%;
  padding-top: 5px;
  text-align: center;
  align-items: center;
  margin-top: 10px;
`;
export const Gap = styled.div`
  display: inline;
  margin: 0 7px;
`;
