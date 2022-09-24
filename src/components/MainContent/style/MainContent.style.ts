import { theme } from 'src/styles/Theme';
import styled from 'styled-components';

export const Main = styled.div`
  /* margin:20px;   */
  display: flex;
  flex-direction: column;
  transition: all 0.2s;

  .content-list {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: grid;
    place-items: center;
    gap: 10px;
  }
  .top-bar {
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    margin: 20px 0 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .tap_menu {
      //카테고리 버튼
      cursor: pointer;
      font-size: 15px;
      padding: 0 15px;
      height: 30px;
      display: flex;
      align-items: center;
      color: #808080;
      font-weight: bold;
      margin-bottom: -5px;
      border-bottom: 2px solid rgba(0, 0, 0, 0);
      transition: all 0.2s ease-in-out 0.05s;
    }
    .selected {
      color: ${({ theme }) => theme.color.secondary};
      z-index: 1;
      border-bottom: 2px solid ${({ theme }) => theme.color.secondary};
      transition: all 0.2s ease-in-out 0s;
    }
  }
`;

export const WriteHandler = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  background-color: #fff;
  padding: 7px 20px;
  margin: 10px 5px;
  border-radius: 2rem;
  color: ${theme.color.placeholder};
  font-weight: 600;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out 0s;
  user-select: none;
  cursor: text;

  span {
    //svg pen
    font-size: 17px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 1px solid rgb(234, 234, 236);
    padding: 5px;
    background-color: rgb(255, 255, 255);
    border-radius: 32px;
  }
  :hover {
    box-shadow: ${theme.color.prRgb(0.3)} 0px 0px 0px 3px;
  }
`;
