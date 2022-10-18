import styled from 'styled-components';
import { Select as AntSelect, Input } from 'antd';

export const Write_Wrapper = styled.div`
  padding: 10px 20px 30px;
  background-color: #fff;
  min-height: 600px;
  border-radius: 4px;
`;

export const EnrQorl = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgba(105, 105, 105, 0.8);
  margin-bottom: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
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

export const CoinView = styled.div`
  width: 320px;
  text-align: center;
  border-radius: 4px;
  .coin-data {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    span {
      color: #8400ec;
      font-weight: bold;
    }
    a {
      color: blue;
    }
  }
`;
