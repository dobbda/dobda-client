import styled from 'styled-components';

export const Main = styled.div`
  /* margin:20px;   */
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  .card-content {
  }

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
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    margin: 50px 0 30px;
  }
  .category-wrapper {
    display: flex;
    white-space: nowrap;

    /* * {margin-right: 5px;} */
    .tap_menu {
      //카테고리 버튼
      cursor: pointer;
      font-size: 16px;
      padding: 3px 15px 5px;
      height: 30px;
      background: #fff;
      border: 1px solid #c8c8c8;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      margin-right: -1px;
    }
    .selected {
      background: #242424;
      color: #fff;
      z-index: 1;
    }
  }

  .writeBtn {
    background: #0057ff;
    border-radius: 4px;
    border: none;
    font-weight: 600;
    font-size: 15px;
    line-height: 19px;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    padding: 5px 15px;
    svg {
      padding-top: 2px;
    }
    cursor: pointer;
    :hover {
      color: #fff555;
    }
  }
`;
