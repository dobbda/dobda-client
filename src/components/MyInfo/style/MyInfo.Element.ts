import styled from "styled-components";
import { Input as AntInput} from "antd";
export const InfoWrapper = styled.div`
  background-color: #fff;
  padding: 10px;
`
//// 업데이트 가능한 유저 정보 components style
export const EditInfoWrapper = styled.div`
  /* background-color: #a8a7a7; */
  border: 1px solid #CDCDCD;
`

export const Culumn = styled.div`
display: flex;
justify-content: space-between;
`

export const Label = styled.em`
  min-width: 150px !important;
  background-color: #f3f3f3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #9a9696;
  padding-right: 15px;
  font-style: normal;
`
export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  padding: 5px 20px;
`
export const Msg = styled.em`
  font-size: 12px;
  color: red;
  padding: 5px;
  display: block;
`
export const P = styled.p`
  margin: 0;
  color: #9a9696;  
`

export const Input = styled(AntInput)`
  max-width: 200px;
  text-align: center;

`

export const Hr = styled.div`
margin: 0;
border-bottom: 0.5px solid #CDCDCD;
`
export const BtnWrp = styled.div`
text-align: center;
padding-top: 10px;
background-color: antiquewhite;
`

////////////////////////////////////////////////////////////////////////////////////////////////

export const Flex = styled.div`
  margin-top:20px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`
export const Coin = styled.p`
  margin:0;
  color: ${({theme})=>theme.color.coin};
  font-size: 16px;
  margin-right: 30px;
  width:150px;

`

export const Label2 = styled.em`
  min-width: 150px !important;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #9A9696;
  margin-right: 30px;
  font-style: normal;
  font-size: 16px;
  font-weight: bold;
  
`
export const Btn = styled.div`

  border:none;
  color: #A3A3A3;
  padding:0;
  margin:0;
  border: solid 1px #A3A3A3;
  padding:0 20px;

  :hover{
    color: blue;
  }
`