import styled from 'styled-components';

export const Div = styled.div`
  height: 40px;
  background-color: none;
  border-bottom: 3px solid ${({theme})=> theme.color.main2};
  width: 300px;
  box-shadow: 0px 0px 0.5px 1px ${({theme})=> theme.color.main2};
  border-radius: 2px;
  @media screen and (max-width:${({theme})=> theme.media.small}) {
    max-width: ${({theme})=> theme.media.cardMaxWidth};
    width: 100%;
    min-width: ${({theme})=> theme.media.cardMinWidth};
    margin-top: 10px;
  }

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
  }
  button {
    text-decoration: none;
    float: right;
    width: 39px;
    height: 39px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme})=> theme.color.main2};
    border:1px solid ${({theme})=> theme.color.main2};
    background: ${({theme})=> theme.color.main2}
  }
`;
