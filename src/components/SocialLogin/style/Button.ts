import styled from 'styled-components';
import { css } from 'styled-components';

type Props = {
  name: string;
};

export const Text = styled.span`
  margin-left: 20px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  height : 30px; 
  overflow : hidden;
  text-overflow : ellipsis;
  -webkit-line-clamp : 1; 
  -webkit-box-orient: vertical;
`;

export const Item = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px 28px 12px 28px;
  word-break: keep-all;
  overflow: hidden;

`;

export const Wrap = styled.div<Props>`
  cursor: pointer;
  width: 100%;
  height: 50px;
  background-color: ${({ name }) => (name === 'google' ? '#fff' : '#3c4043')};

  display: flex;
  align-items: center;
  box-shadow: 0px 0.5px 1px 0px rgba(0, 0, 0, 0.1);

  border-radius: 4px;
  border: 1.5px solid #dee2e6;
  :hover {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.5);
  }
  ${(props) => {
    switch (props.name) {
      case 'google':
        return css`
          background-color: #fff;
          color: #3c4043;


        `;
      case 'github':
        return css`
          background-color: #3c4043;
          color: #ebe9e9;

        `;
      case 'naver':
        return css`
          background-color: #fff;
          color: #19ce60;

        `;
      default:
        return css`
          background-color: #fff;
          color: #3c4043;

        `
      
    }
  }}
`;