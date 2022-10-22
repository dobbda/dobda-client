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
    /* padding: 2px 2px 0 2px; */
    background-color: ${theme.color.primary};
    border-radius: 4px;
    border-bottom-left-radius: 0;
    /* border-bottom-left-radius: 4px */

    color: #fff;
    .tap_menu {
      //카테고리 버튼
      cursor: pointer;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      font-size: 15px;
      font-weight: 900;
      padding: 0 12px;
      line-height: 30px;
      display: flex;
      color: #fff;
      transition: all 0.2s ease-in-out 0.05s;
      border-top: solid 2px ${theme.color.primary};
      border-left: solid 2px ${theme.color.primary};
      border-right: solid 2px ${theme.color.primary};
    }
    .selected {
      color: #6e6e6e;
      transition: all 0.2s;
      background-color: #fff;
    }
  }
`;

export const WriteHandler = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  background-color: #fff;
  padding: 7px 10px;
  margin: 10px 5px;
  border-radius: 2rem;
  color: ${theme.color.placeholder};
  font-weight: 600;
  border: solid 1px ${theme.color.border(0.2)};
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
    box-shadow: ${theme.color.prRgb(0.5)} 0px 0px 0px 3px;
    transition: all 0.3s ease-in-out 0s;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.9em;
  }
`;
