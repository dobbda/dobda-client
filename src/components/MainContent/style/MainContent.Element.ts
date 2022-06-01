import styled from 'styled-components';

export const Main = styled.main`
  margin:20px;
  margin-top: 50px; //임시로
  
  max-width: 1100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: ${({theme})=> theme.media.minWidth}){
    margin:0;
    padding:5px;

  }

  .category-wrapper{
    
    height: 40px;
    display: flex;
    margin-bottom: 20px;
    border-bottom: 3px solid #D3D3D3;

    span{
      cursor: pointer;
      font-size:20px;
      font-weight:900;
      margin-right: 15px;
      color: #686868;
    }
    .selected{
        
        border-bottom: 6px solid ${({ theme }) => theme.color.main2};
        color: ${({ theme }) => theme.color.main2};
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
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 30px;
      /* flex-wrap: wrap; */

      @media screen and (max-width: ${({ theme })=> theme.media.small}){
        grid-template-columns: repeat(1, 1fr);

      }
    }
  }
`;
