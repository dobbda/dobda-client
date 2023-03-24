import { theme } from 'src/styles/Theme';
import styled, { css } from 'styled-components';
// ({theme})=> theme.color

export const Image = styled.img`
  max-height: 200px;
  min-height: 160px;
  width: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease 0s, transform 0.3s ease 0s;
`;
export const ImageWrap = styled.div`
  width: 100%;
  max-height: 200px;
  min-height: 160px;
  overflow: hidden;
  display: inline-block;
`;
export const ContentWrapper = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #fff;
  border: 1px solid ${theme.color.border2};
  /* box-shadow: 0 1px 6px 0 rgb(137 138 154 / 40%); */
  box-sizing: border-box;
  width: 100%;
  :hover {
    .outsourcing-title {
      text-decoration: 1px underline;
      text-underline-offset: 4px;
    }
    ${Image} {
      transform: scale(1.05);
      overflow: hidden;
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
	color:#303441;
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
  overflow: hidden;
  cursor: default;
`;

export const Content = styled.div`
  padding: 0 20px;
  width: 100%;
  /* @media screen and (max-width: ${theme.media.small}) {
    padding: 20px 10px;
  } */
`;

export const Watch = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffffffe3;
  padding: 3px 6px;
  border-bottom-left-radius: 4px;
	font-size: 12px;
	font-weight: 500;

`;
export const Countdown = styled.div<{ end?: boolean }>`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  padding: 3px 7px;
  border-bottom-right-radius: 4px;
	font-size: 12px;
	background-color: ${({ end }) => end ? '#ff7262' : '#f2f3f7'};
	color: ${({ end }) => end ? 'white' : '#9a9ba7'};
	font-weight: bold;
	
`;
