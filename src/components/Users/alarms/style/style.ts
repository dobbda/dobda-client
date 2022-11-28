import styled from 'styled-components';

export const Div = styled.div`
  background-color: #fff !important;
  border: 1px solid ${({ theme }) => theme.color.prRgb(0.3)};
  width: 300px;
  height: 400px;
  font-size: 12px;
  border-radius: 8px;
  position: relative;
  overflow-y: auto;
  ul {
    margin: 0;
    padding: 0 10px;
  }

  h1 {
    padding: 10px;
    font-size: 15px;
    font-weight: 900;
    text-align: center;
    color: ${({ theme }) => theme.color.text1(0.8)};
  }

  .show-all-messages {
    text-align: center;
    padding: 5px;
    color: #0074cc;
    text-decoration: underline;
    text-underline-offset: 2px;
    /* position: absolute;
    bottom: 0;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    span:hover {
    }
  }
`;
