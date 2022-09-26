import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
// ({theme})=> theme.color

export const ContentWrapper = styled.div`
  position: relative;
  border: solid 1px #dfdfdf;
  background-color: #fff;
  border-radius: 4px;
  :hover {
    border: 1px solid ${theme.color.primary};
  }
`;

export const Progress = styled.h1`
  color: #b95792;
  font-size: 13px;
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

export const P = styled.p`
  display: inline;
  color: #686868;
  font-size: 12px;
`;

// header
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;

//body

export const Title = styled.h3`
  overflow: hidden;
  padding-bottom: 10px;
  word-break: break-word;
  max-height: 100px;
`;

export const Gap = styled.div`
  display: inline;
  margin: 0 7px;
`;

export const Info = styled.div`
  background-color: rgba(235, 238, 243, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 5px;
`;

export const Image = styled.img`
  width: 100%;
  max-height: 170px;
  object-fit: cover;
  padding: 5px;
  border-radius: 8px;
`;

export const Content = styled.div`
  padding: 10px 20px;
  width: 100%;
  @media screen and (max-width: 450px) {
    padding: 20px 10px;
  }
`;

export const Watch = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 5px 10px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
