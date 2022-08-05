import styled from 'styled-components';

export const Main = styled.div`
  /* margin:20px;   */
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  section {
    /* background-color: #fff; */
    /* border: 1px solid #eee; */
    padding-top: 10px;
    /* padding-bottom: 100px; */
    min-height: 1300px;
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
  .categories-menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .category-wrapper {
    /* height: 35px; */
    display: flex;
    flex-wrap: wrap;
    :hover {
      color: #11a14a;
    }
    span {
      cursor: pointer;
      background: #ffffff;
      border: 1px solid #c8c8c8;
      border-radius: 37px;
      color: #000;
      padding: 5px 25px;
      margin: 10px;
    }
    .selected {
      background: #212121;
      border: 1px solid #212121;
      border-radius: 30px;
      padding: 5px 25px;
      color: #fff;
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
