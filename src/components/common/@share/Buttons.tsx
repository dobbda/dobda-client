import styled, { CSSProperties } from 'styled-components';
import { theme } from 'src/styles/Theme';

interface Props {
  border?: boolean;
  cancel?: boolean;
  loading?: boolean;
  primary?: boolean;
  secondary?: boolean;
  block?: boolean;
}

export const Button = styled.button<Props>`
  background-color: ${({ cancel, secondary }) =>
    cancel ? `rgba(0,0,0,0)` : secondary ? theme.color.secondary : theme.color.primary};
  color: ${({ cancel, secondary }) => (cancel ? (secondary ? theme.color.secondary : theme.color.primary) : '#fff')};
  border: 1px solid
    ${({ cancel, secondary }) => (cancel ? `${secondary ? theme.color.secondary : theme.color.primary}` : 'rgba(0,0,0,0)')};
  padding: 4px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  white-space: nowrap;
  user-select: none;
  transition: all 0.2s ease-in-out 0s;
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  ${({ block }) => block && 'margin: 0 auto'};
  :hover {
    box-shadow: ${({ secondary }) =>
      secondary ? theme.color.seRgb(0.4) + '0px 0px 0px 3px' : theme.color.prRgb(0.4) + '0px 0px 0px 3px'};
  }
`;
