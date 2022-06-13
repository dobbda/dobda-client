import styled from 'styled-components'
interface Props {
  color?: string,
  bg?: boolean,
}

export const TagWord = styled.div<Props>`

  padding: ${({bg})=>bg && "0 8px 3px"} ;
  margin: auto 3px;

  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  border-radius: 5px;
  background-color: ${({theme,bg})=>bg && theme.color.secondary };
  color: ${({theme,bg})=> bg?"#fff":theme.color.secondary};
  cursor:pointer;
  :hover {
    color:#00C6FF;
  }
  `
