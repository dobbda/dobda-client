import { useState } from "react";
import styled from "styled-components";

interface Props {
	id?: string;
	name:string;
	defaultChecked?: boolean;
}
function Radio(props:Props) {
  const [checkedInputs, setCheckedInputs] = useState([]);

  const changeRadio =( e:any) => {
    if (e.target.checked) {
      setCheckedInputs(e.target.id);
    }
  };

  return (
    <>
        <label>
          <FormCheckLeft
					css={{color: "red"}}
            type="radio"
            id={props.id}
						defaultChecked={props.defaultChecked}
						name="radio-button"
            onChange={changeRadio}
            value={checkedInputs}
          />
          <FormCheckText>{props.name}</FormCheckText>
        </label>
    </>
  );
}

export default Radio;

interface RadioGroupProps {
	children: typeof Radio
}
export const RadioGroup = ({children}:RadioGroupProps) => {

	return (
		<>
		{children}
		</>
	)
}


const FormCheckText = styled.span`
  font-size: 16px;
  padding: 3px 15px 5px;
  height: 30px;
  background: #fff;
	border: 1px solid #c8c8c8;
  display: flex;
  justify-content: center;
  align-items: center;
	color:#000;
	margin-right:-1px;
	cursor: pointer;
`
const FormCheckLeft = styled.input.attrs({ type: 'radio' })`
  &:checked + ${FormCheckText} {
    background: #242424;
    color: #fff;
		z-index: 1;
  }
  display: none;
`;