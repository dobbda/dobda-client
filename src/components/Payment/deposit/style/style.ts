import styled from "styled-components";

export const CoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding:30px;
  width: 100%;
  height: 100%;
  background: #FAFBFF;

  h1{
    display: block;
    font-weight: bold;
  } 
`

export const Wrapper = styled.div`
box-sizing: border-box;
display: inline-block;
width:100%;
max-width: 473px;
/* height: 604px; */
padding: 20px;

background: #fff;
border: 1px solid #B8B8B8;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
`
export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  >*{
    margin: 0 10px;
  }
`
export const Coin = styled.p`
  margin:0;
  color: ${({theme})=>theme.color.coin};
  font-size: 16px;
  width:150px;
`
export const Money = styled.p`
  margin:0;
  font-size: 18px;
  color: red;
  width:150px;
`
export const Hr = styled.div`
margin: 0;
border-bottom: 0.5px solid #CDCDCD;
`

