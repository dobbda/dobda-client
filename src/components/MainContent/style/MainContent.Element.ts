import styled from 'styled-components';

export const Main = styled.div`
  /* margin:20px;   */
  display: flex;
  flex-direction: column;
  transition: all 0.2s;

  .search-wrapper{
    margin-left: 15px;
  }

  .category-wrapper{
    
    height: 40px;
    display: flex;
    margin-bottom: 20px;
    border-bottom: 3px solid #D3D3D3;
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


  .main-content {
    width: 100%;
    height: 100%;
    /* padding:10px; */

    .card-grid{
      margin:0;
      padding: 0;
      width: 100%;
      display: grid;
      place-items: center;
      grid-template-columns: repeat(2, 1fr);
      gap:30px 20px;
      /* flex-wrap: wrap; */

      @media screen and (max-width: ${({ theme })=> theme.media.small}){
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
