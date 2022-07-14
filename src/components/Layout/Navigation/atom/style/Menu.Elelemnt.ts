import styled from 'styled-components';

export const Div = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  overflow: hidden;
  width: ${({ theme }) => theme.media.navbarWidth};
  :hover {
    background-color: ${({ theme }) => theme.color.primary};
  }
`;

export const Icon = styled.div`

  position: absolute;
  top: 13px;
  height: 25px;
  left: 10px;
  transform: scale(0.8);


`


export const Label = styled.label`
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 10px 0 60px;
  cursor: pointer;


  h3 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
  .rotate {
    transition: all 0.3s;
  }

`;

export const ChildMenu = styled.div`
  background-color: ${({ theme }) => theme.color.primary};

  /* width: '100%'; */
  height: 0;
  transition: all 0.3s;
  overflow: hidden;
`;

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;


  &:checked + ${Label} + ${ChildMenu} {
    border-bottom: 1px solid #5a6f83;
    border-top: 1px solid #5a6f83;
    height: 100px;

    max-height: 50px;
    color: yellow;
  }

  &:checked + ${Label} .rotate {
    transform: rotate(3.142rad);
  }
`;
