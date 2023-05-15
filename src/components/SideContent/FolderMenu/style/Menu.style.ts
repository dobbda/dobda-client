import { theme } from 'src/styles/Theme';
import styled from 'styled-components';

export const Div = styled.div<{ checked: boolean; bg?: string }>`
  position: relative;
  overflow: hidden;
  margin: -1px;
  ${({ bg }) => bg && `background-color: ${bg}`}
`;

export const Label = styled.label<{ color?: string }>`
  color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 10px;
  height: 45px;
  margin: 0 10px;
  user-select: none;
  cursor: pointer;

  h1 {
    color: ${({ color }) => (color ? color : `rgba(0, 0, 0, 0.6)`)};
    margin: 0;
    font-size: 15px;
    font-weight: bold;
  }
  .rotate {
    transition: all 0.3s;
  }
`;
export const Icon = styled.div`
  color: rgba(0, 0, 0, 0.6);
`;
export const ChildMenu = styled.div`
  height: 0;
  color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  transition: height 0.3s;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none; /* Firefox 64 */
  /* 
  ::-webkit-scrollbar {
    width: 10px;
    background: #cecece;
  }

  ::-webkit-scrollbar-thumb {
    background: #929191;
    border-radius: 1rem;
    border: 2px solid transparent;
  } */
`;

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})<{ height: string }>`
  display: none;

  &:checked + ${Label} + ${ChildMenu} {
    height: ${({ height }) => height};
  }

  &:checked + ${Label} .rotate {
    transform: rotate(0deg);
  }
`;
