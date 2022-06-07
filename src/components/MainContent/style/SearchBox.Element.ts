import styled from 'styled-components';

export const Div = styled.div`
  height: 40px;
  background-color: none;
  border-bottom: 3px solid ${({theme})=> theme.color.secondary};
  width: 300px;
  box-shadow: 0px 0px 0.5px 1px ${({theme})=> theme.color.secondary};
  border-radius: 2px;
  margin-bottom: 20px;
  
  input {
    display: flex;
    border: none;
    background: none;
    outline: none;
    float: left;
    font-size: 1rem;
    line-height: 33px;
    transition: 0.4s;

    width: 250px;
    padding: 0 15px;
    padding-top: 2px;
    ::placeholder{
      color: ${({theme})=> theme.color.secondary} 
    }
  }
  button {
    text-decoration: none;
    float: right;
    width: 39px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    border:1px solid ${({theme})=> theme.color.secondary};
    background: ${({theme})=> theme.color.secondary}
  }
`;
