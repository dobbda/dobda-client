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

export const Info = styled.div`
  background-color: rgba(235, 238, 243, 0.5);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 5px;
  border-radius: 12px;
  margin: 10px;
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
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
export const Countdown = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  padding: 5px 10px;
  border-top-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;
