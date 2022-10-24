import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
// ({theme})=> theme.color

export const ContentWrapper = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid ${theme.color.border2};
  box-shadow: 0 1px 6px 0 rgb(137 138 154 / 40%);
  box-sizing: border-box;
  width: 100%;
  :hover {
    .outsourcing-title {
      text-decoration: 1px underline;
      text-underline-offset: 4px;
    }
  }
  * p {
    margin: 0;
  }
`;

export const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  line-clamp: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
`;

export const Progress = styled.h1`
  color: #b95792;
  font-size: 13px;
`;

// header
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;

//body

export const Info = styled.div`
  background-color: rgba(235, 238, 243, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 15px;
  gap: 5px;
  margin: 0 -1px;
  margin-bottom: 0;
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
  right: 0;
  background-color: #fff;
  padding: 5px 10px;
  /* border-top-right-radius: 4px; */
  border-bottom-left-radius: 4px;
`;
export const Countdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 5px 10px;
  /* border-top-left-radius: 4px; */
  border-bottom-right-radius: 4px;
`;
