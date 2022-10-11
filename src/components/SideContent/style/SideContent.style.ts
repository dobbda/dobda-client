import { Avatar as AntAvatr } from 'antd';
import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
interface StyleProps {
  mobileOn: any;
}

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 100px; */
  width: 100%;
`;

export const P = styled.p`
  color: 808080;
  margin: 0 0 5px 10px;
`;
export const Red = styled.span`
  color: red;
`;
