import styled from "styled-components";

export const Div = styled.div`
  background-color: #fff;
  border: 1px solid ${({theme})=> theme.color.border};
  min-width: 300px;
  ul {
    margin:0;
    padding:0;
  }
  li:nth-child(2n) {
    background-color: #fbf8f8;

;
  }
  h1{
    padding: 7px;
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    color: ${({ theme})=> theme.color.secondary};
    background-color: #fff;
    border-bottom: 1px solid ${({ theme})=> theme.color.border};
  }

  .show-all-messages{
    text-align: center;
    padding:10px;
    background-color: ${({ theme})=> theme.color.secondary};
    color: #fff;
    span:hover {

    }
  }


`