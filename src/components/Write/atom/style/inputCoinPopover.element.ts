import styled from 'styled-components';

type Props = {
  types?: string;
};

export const Div = styled.div`
  width: 320px;
  padding: 20px;
  text-align: center;
   background-color:#fff;/*${({ theme }) => theme.color.primary}; */
  color: #fff;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.border};

  .err-message {
    margin:0;
    height: 20px;
    color:red;
    font-size: 13px;
  }
`;


export const ButtonGroup = styled.div`
  margin: 10px;
  padding: 10px;
  em {
    color: #0082f4;
    margin-top:3px;
    float: left;
    :hover {
      border-bottom: 0.1px solid #0082f4;
    }
  }
`;

