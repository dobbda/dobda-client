import styled from 'styled-components';

export const Div = styled.div`
  background-color: #fff !important;
  border: 1px solid ${({ theme }) => theme.color.border};
  width: 300px;
  height: 400px;
  font-size: 12px;
  ul {
    margin: 0;
    padding: 0;
  }

  h1 {
    padding: 7px;
    font-size: 13px;
    font-weight: 900;
    text-align: center;
    color: ${({ theme }) => theme.color.secondary};
    background-color: #f1f2f3;
  }

  .show-all-messages {
    text-align: center;
    padding: 10px;
    color: #0074cc;
    span:hover {
    }
  }
`;
