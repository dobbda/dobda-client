import { Input as AntInput, Button } from 'antd';
import { i } from 'src/icons';
import styled from 'styled-components';
import { GlobalStyle } from 'src/styles/GlobalStyle';

export const EditorStyle = styled.div`
  position: relative;
  background-color: #fff;
  height: fit-content;
  margin: -1px;
  .grIOnC {
    padding-top: 4px;
    border-radius: 0;
    input {
      padding-top: 5px;
    }
  }
`;

export const ReplyIconS = styled(i.Reply)`
  fill: gray;
  transform: rotate(180deg);
  height: 20px;
  width: 20px;
`;
export const ShowEditorBtn = styled(AntInput)`
  height: 50px;
  background-color: #fff;
  .fXtidj .grIOnC input {
    padding: 0;
    border-radius: 5px;
  }
  input::placeholder {
    font-size: 15px;
    color: gray;
    /* background-color: #f5f5f5; */
  }
`;

export const CloseEditor = styled(Button)`
  position: absolute;
  bottom: 0;
  height: 30px;
  background-color: #f7f9fc;
`;
export const SubmitWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 150px;
  right: 150px;
  /* width: 100%; */
  display: flex;
  align-items: center;
`;
