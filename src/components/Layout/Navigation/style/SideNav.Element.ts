import styled from 'styled-components';
interface StyleProps {
  mobileOn: any;
}


export const SideNavWrapper = styled.nav`
position: -webkit-sticky;
  position: sticky;
  top: 60px;
  left:0;
  right: 0;
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  gap:10px;
`;

