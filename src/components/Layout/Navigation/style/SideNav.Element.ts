import styled from 'styled-components';
interface StyleProps {
  mobileOn: any;
}


export const SideNavWrapper = styled.nav`
	display: flex;
  flex-direction: column;
  gap:10px;
  height: 100%;
  /* border-right:1px solid rgba(0,0,0,0.5); */
  padding-top: 20px;
  background-color: #f4faff;
  box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
  position: sticky;
  top: 0;
  left: 0;
`;

