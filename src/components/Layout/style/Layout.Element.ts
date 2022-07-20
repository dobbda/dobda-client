import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
const padding = ""
type Props = {
  paddingLeft?:boolean
}
export const Container = styled.div`
  /* width: 100%; */
  height:100% ;
`
export const Wrapper = styled.div<Props>`
  height: 100%;
  display: flex;
  margin: auto;
  max-width: 1100px;
  min-width:360px;
  margin-top:10px;
  gap: 20px;
  /* border: 1px solid ${({theme})=>theme.color.border}; */
  .ContentWrapper {
    background-color: #fff;
    backdrop-filter: blur(4px);
    position: relative;
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .sideMenuWrapper{
    position: relative;
    height: 100%;
    min-width: 200px;
    /* border: 1px solid gray; */
    margin-left: 10px;
    @media screen and ( max-width: 678px){
      display: none;
    };
  }

`;

