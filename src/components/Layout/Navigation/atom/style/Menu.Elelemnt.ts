import styled from 'styled-components';

export const Icon = styled.div`

  position: absolute;
  top: 10px;
  height: 25px;
  left: 10px;
  font-size: 22px;
  font-weight: bold;
	
`
export const Div = styled.div<{checked: boolean}>`
	
    position: relative;
    overflow: hidden;
    /* background-color: ${({ theme }) => theme.color.primary} ; */
	color: rgba(255,255,255,0.8);
	overflow: hidden;
	:hover {
		h1, ${Icon}, svg{
			color: #fff;
		}	
	}
	background-color:${({checked})=>checked&& "#393939" };
`;




export const Label = styled.label`
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 0 10px 0 60px;
  cursor: pointer;

  h1 {
	margin:0;
    font-size: 17px;
    font-weight: bold;
		color: rgba(255,255,255,0.7);
  }
  .rotate {
    transition: all 0.3s;
  }

`;

export const ChildMenu = styled.div`
	margin:2px;
  height: 0;
	color:rgba(0,0,0,0.8);
  overflow: hidden;
  transition: height 0.3s;
  background-color: #f6f6f6;
  box-shadow: inset -1px 2px 5px -3px rgba(0, 0, 0, 0.25);
  
`;

export const CheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;


  &:checked + ${Label} + ${ChildMenu} {
    height: 100px;
    max-height: 200px;

  }

  &:checked + ${Label} .rotate   {
    transform: rotate(3.142rad);
		color:#ffff;

  }
`;
