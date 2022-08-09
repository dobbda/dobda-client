import styled from 'styled-components';

export const Div = styled.div`
	margin-top:20px;
  height: 42px;
  background-color: #fff;
  border: 1px solid #D9D9D9;
  width: 100%;
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
      color: rgba(0, 0, 0, 0.4);
			font-weight: 600;
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
    border: none;
    background: none;
    background-color: none;
  }
`;
