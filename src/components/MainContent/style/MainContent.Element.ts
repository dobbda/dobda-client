import styled from 'styled-components';

export const Main = styled.div`
  /* margin:20px;   */
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  section {
    background-color: #fff;
    border: 1px solid #eee;
    padding-top: 20px;
    padding-bottom: 100px;
    min-height: 1300px;
  }
  .search-wrapper {
    padding-left: 10px;
  }

  .content-list {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: grid;
    place-items: center;
  }
  .categories-menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }
  .category-wrapper {
    height: 35px;
    display: flex;
    /* margin-bottom: 10px; */
    :hover {
      color: #11a14a;
    }
    span {
      cursor: pointer;
      font-size: 20px;
      font-weight: bold;
      margin-left: 10px;
      color: #b9b9b9;

    }
    .selected {
      margin-bottom: -3px;
      color: ${({ theme }) => theme.color.secondary};
      transition: 0.3s ease-in-out border-bottom;
    }
  }

  .writeBtn {
    background: none;
    padding: 0 10px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    color: #465666;
    text-align: center;
    svg {
      padding-top: 2px;
    }
    cursor: pointer;
    :hover {
      color: #11a14a;
    }
  }
`;
