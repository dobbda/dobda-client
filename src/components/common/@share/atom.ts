import styled from "styled-components"


export const Hr = styled.div`
margin: 0;
border-bottom: 0.5px solid #CDCDCD;
`

export const NoData = styled.p`
	margin: 0;
	padding: 15px 0 5px 12px;
	color: rgba(0,0,0,0.5);
`


export const CreatedAt = styled.span`
  color: rgba(0, 0, 0, 0.4);
  padding-top: 3px;
  font-size: 13px;
  font-weight: 600;
  margin-left: 10px;
`;
interface FlexProp {
	style?:string[]
}
export const Flex = styled.div<FlexProp>`
	display: flex;
	align-items: center;
	justify-content: center;
	/* margin:10px 0; */
	${({style})=>{return{...style}}}
`

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
	gap: 15px;
  margin: 10px auto 0;
`;