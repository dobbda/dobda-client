import styled from 'styled-components';

export const Main = styled.div`
  /* margin:20px;   */
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  padding-top:30px;
  .search-wrapper{
    margin-left: 15px;
  }

  .category-wrapper{
    height: 40px;
    display: flex;
    /* margin-bottom: 10px; */
    span{
      cursor: pointer;
      font-size:20px;
      font-weight:bold;
      margin-left: 15px;
      color: #b9b9b9;
    }
    .selected{
        margin-bottom: -3px;
        color: ${({ theme }) => theme.color.secondary};
        transition:  0.3s ease-in-out border-bottom;
      }
  }

  .content-list {
    width: 100%;
    height: 100%;
      margin:0;
      padding: 0;
      display: grid;
      place-items: center;
  }

  .categories-menubar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #D3D3D3;
    margin: 0 10px;
    .writeBtn{
      background: none;
      padding: 0 10px;
      border:  none;
      font-size: 20px;
      font-weight: bold;
      color: #465666;
      cursor: pointer;
      :hover{
        color: blue;
      }
    }
  }
`;
