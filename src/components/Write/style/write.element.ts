import styled from 'styled-components';
import { Select as AntSelect, Input } from 'antd';

export const Write_Wrapper = styled.div`
  padding: 30px 5px;
  background-color: #fff;
  margin-top: -13px;
  min-height: 800px;
`;

export const EnrQorl = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(105, 105, 105, 0.8); ;
`;
export const Pilsu = styled.em`
  ::before {
    content: '*';
    color: red;
    font-size: 18px;
    margin-right: 5px;
  }

  /* font-weight: bold; */
`;
export const Group = styled.div`
  width: fit-content;
  display: inline-block;
  margin: 20px 20px 5px 0;
`;

export const Tags = styled(Input)`
  margin-left: 15px;
`;
