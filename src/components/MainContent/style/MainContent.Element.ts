import styled from 'styled-components';

export const Main = styled.main`
  margin:20px;  
  max-width: 1100px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  @media screen and (max-width: 400px){
    margin:0;
    margin-top: 20px;
    padding:0 5px 5px;
    transition: all 0.2s;

  }

  .category-wrapper{
    
    height: 45px;
    display: flex;
    margin-bottom: 20px;
    border-bottom: 3px solid #D3D3D3;
    span{
      cursor: pointer;
      font-size:20px;
      font-weight:800;
      margin-right: 15px;
      color: #686868;
    }
    .selected{

        border-bottom: 6px solid ${({ theme }) => theme.color.main2};
        margin-bottom: -3px;
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
