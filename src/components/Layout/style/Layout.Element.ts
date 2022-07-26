import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
const padding = ""
type Props = {
  paddingLeft?:boolean
}
export const Container = styled.div`
  width: 100%;
  height:100% ;
  line-height: normal;
  box-sizing: border-box;
`
export const Wrapper = styled.div<Props>`
  min-height: 100%;
  
  display: flex;
  margin: auto;
  max-width: 1100px;
  min-width:360px;
  margin-top:10px;
  gap: 20px;
  .ContentWrapper {
    margin:60px 0;

    width: 100%;
    min-height: 100%;
    /* background-color: #fff; */
    backdrop-filter: blur(4px);
    position: relative;
    /* border: 1px solid hsl(210deg 8% 85%); */

  }
  .sideMenuWrapper{
    margin-top:60px;
    margin-left:10px;
    position: relative;
    min-height: 100%;

    min-width: 200px;
    @media screen and ( max-width: 789px){
      display: none;
    };
  }

`;

