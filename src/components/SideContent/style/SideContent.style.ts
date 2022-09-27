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
`;

export const Avatar = styled(AntAvatr)`
  border: 1px solid ${theme.color.border2};

  :hover {
    border: 1px solid ${theme.color.primary};
    box-shadow: ${theme.color.prRgb(0.5)} 0px 0.5px 4px 5px;
  }
`;
