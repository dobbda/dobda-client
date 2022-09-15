import styled from 'styled-components';

export const Div = styled.div<{ checked: boolean }>`
  position: relative;
  overflow: hidden;
  overflow: hidden;
  /* background-color: #3f2b56; */
  /* color: rgba(0, 0, 0, 0.6); */
  /* color: rgba(255, 255, 255, 0.8); */
`;

export const Label = styled.label`
  color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  margin: 0 10px 0 60px;
  cursor: pointer;

  h1 {
    color: rgba(0, 0, 0, 0.6);
    margin: 0;
    font-size: 15px;
    font-weight: bold;
  }
  .rotate {
    transition: all 0.3s;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 22px;
  color: rgba(0, 0, 0, 0.6);
`;
export const ChildMenu = styled.div`
  margin: 2px;
  height: 0;
  color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  transition: height 0.3s;
  box-shadow: inset 0px 2px 5px -3px rgb(0 0 0 / 25%);
`;

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;

  &:checked + ${Label} + ${ChildMenu} {
    height: 100px;
    max-height: 200px;
  }

  &:checked + ${Label} .rotate {
    transform: rotate(0deg);
  }
`;
