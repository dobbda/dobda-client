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
  position: relative;
`
export const Wrapper = styled.div<Props>`
  min-height: 100%;
  display: flex;
  justify-content:space-between;
  min-width:360px;
  gap: 20px;
`;

export const CenterSection = styled.section`

	max-width: 800px;
    position: relative;


`

export const SideNavWrapper = styled.section`
    min-width: 200px;
    @media screen and ( max-width: 789px){
      display: none;
    };
`
export const Aside = styled.aside`
	min-width: 200px;
	max-width: 200px;
`


export const HeaderAreas = styled.div`
	height: ${({ theme})=> theme.media.headerHeight};
	width: 100%;
`

