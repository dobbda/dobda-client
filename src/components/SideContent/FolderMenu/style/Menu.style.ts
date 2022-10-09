import styled from 'styled-components';

export const Div = styled.div<{ checked: boolean }>`
  position: relative;
  overflow: hidden;
  overflow: hidden;
  background-color: #fff;
  /* border-bottom: solid 1px #eee; */
`;

export const Label = styled.label`
  color: rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 10px;
  height: 45px;
  margin: 0 10px;

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
  color: rgba(0, 0, 0, 0.6);
`;
export const ChildMenu = styled.div`
  height: 0;
  color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  transition: height 0.3s;
  background-color: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: -1px;
  > * {
    text-align: center;
    padding-top: 5px;
  }
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
