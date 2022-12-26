import { theme } from 'src/styles/Theme';
import styled from 'styled-components';

export const Div = styled.div`
  background-color: #fff !important;
  box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%), 0 9px 28px 8px rgb(0 0 0 / 5%);
  width: 300px;
  height: 400px;
  font-size: 12px;
  border-radius: 8px;
  position: relative;
  overflow-y: auto;
  padding: 5px 5px;
  ::-webkit-scrollbar {
    width: 6px;
    background: #dbdbdb;
  }

  ::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 1rem;
    border: 2px solid transparent;
  }
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
