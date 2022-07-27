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
  justify-content:space-between;
  min-width:360px;
  /* position: relative; */
`;

export const CenterSection = styled.section`
width: 100%;
min-height: 100%;
	max-width: 800px;
    position: relative;
	margin:0 auto;
`

export const SideNavWrapper = styled.div`
    min-width: 200px;
	min-height: 100%;
	margin-right: 5px;
	position: fixed;
	top: 50px;
	left: 0;
	bottom: 0;
    @media screen and ( max-width: 789px){
      display: none;
    };
`
export const SideAreas= styled.em`
  min-width: 200px;
  height: 100%;
  margin-right: 5px;
  @media screen and ( max-width: 789px){
      display: none;
    };
`

export const Aside = styled.aside`
	width: 200px;
	height: 100%;
	top: 0;
	position: absolute;
	right: -220px;
	text-align: center;

`


export const HeaderAreas = styled.div`
	
	height: ${({ theme})=> theme.media.headerHeight};
	width: 100%;
`

