import styled from "styled-components";

export const Div = styled.div`
  background-color: #fff;
  ul {
    margin:0;
    padding:0;
  }
  li:nth-child(2n) {
    background-color: #fbf8f8;

;
  }
  h1{
    padding: 10px;
    font-size: 22px;
    font-weight: 900;
    text-align: center;
    background-color: #1111;
    border-bottom: 2px solid ${({ theme})=> theme.color.border};
  }

  .show-all-messages{
    text-align: center;
    padding:10px;
    background-color: #2222;
    span:hover {

    }
  }


`