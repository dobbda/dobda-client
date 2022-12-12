import styled from 'styled-components';
// height: ${({theme})=>theme.media.size};
const padding = '';
type Props = {};
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
  max-width: ${({ theme }) => theme.media.maxWidth};
  margin: 0 auto;
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  height: 100%;
  padding: 0;
  margin: 0 10px;
  gap: 17px;
  @media screen and (max-width: 1060px) {
  }
  @media screen and (max-width: 768px) {
    margin: 0 5px;
  } ;
`;

export const MainWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 10 20px;
  position: relative;
  transition: all 0.1s;
  @media screen and (max-width: 1060px) {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  } ;
`;

export const SideNavWrapper = styled.div<{ width?: string }>`
  flex: 0 0 auto;
  position: sticky;
  top: 50px;
  width: ${(props) => props.width || '250px'};
  height: calc(100vh - 50px);
  box-sizing: border-box;
  overflow-y: scroll;
  padding-top: 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox 64 */
  @media screen and (max-width: 1060px) {
    /* background-color: #fff; */
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const AsideContent = styled.div`
  min-width: 200px;
  height: 500px;
  position: sticky;
  margin-top: 80px;
  top: 50px;
  right: 0;

  background-color: #dedede;
  text-align: center;

  @media screen and (max-width: 1080px) {
    display: none;
  } ;
`;

export const HeaderContent = styled.div`
  margin-top: ${({ theme }) => theme.media.headerHeight};

  width: 100%;
`;
