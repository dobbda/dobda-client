import styled from 'styled-components';

export const Main = styled.div`
  /* margin:20px;   */
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  card-content {
    padding-top: 10px;
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
		margin-left: 5px;
  }
  .category-wrapper {
    /* height: 35px; */
    display: flex;
    /* flex-wrap: wrap; */
		white-space: nowrap;
    :hover {
      color: #11a14a;
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
