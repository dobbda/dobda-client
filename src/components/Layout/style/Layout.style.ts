import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
const padding = '';
type Props = {
  setWidth: boolean;
};
export const Container = styled.div`
  min-width: 100%;
  height: 100%;
  line-height: normal;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  min-width: 330px;

`;
export const Position = styled.div<Props>`
	/* height: 100%; */
  /* max-width: ${({setWidth})=> setWidth ? "1260px" : "1180px" }; */
  max-width: 1260px;
  margin: 0 auto;
	background-color: #f8f9fa;

`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
	height: 100%;
  padding: 0;
  margin: 0;
`;

export const MainWrapper = styled.div`
	min-height: 100vh;
	width: 100%;
	margin: 0 20px;
	position: relative;
	padding-top: 10px;
	@media screen and (max-width: 768px) {
    margin: 0 5px;
  } ;
`;

export const SideNavWrapper = styled.div`
  flex: 0 0 auto;
  position: sticky;
  top: 50px;
  width: 220px;
	height: calc(100vh - 50px);
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;


export const AsideContent = styled.div`
  min-width: 200px;
	height: 500px;
  position: sticky;
	margin-top:80px;
  top: 50px;
	right: 0;

	background-color: #dedede;
  text-align: center;

	@media screen and (max-width: 1080px) {
    display: none;
  } ;
`;

export const HeaderAreas = styled.div`
  height: ${({ theme }) => theme.media.headerHeight};
  width: 100%;
`;
