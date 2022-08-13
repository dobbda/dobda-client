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

const FormCheckText = styled.span`
  font-size: 18px;
  padding: 3px 15px 5px;
  height: 30px;
  background: #fff;
	border: 1px solid #c8c8c8;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
	margin: 8px;
	color:#000;

	cursor: pointer;


`;

const FormCheckLeft = styled.input.attrs({ type: 'radio' })`

  &:checked + ${FormCheckText} {
    background: #242424;
    color: #fff;
  }
  display: none;
`;