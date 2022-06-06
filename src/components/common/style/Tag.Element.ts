import styled from 'styled-components'
interface Props {
  color?: string,
}

export const TagWord = styled.div`
  padding: 2px 8px 4px;
  margin-right: 2px;
  font-size: 14px;
  border-radius: 5px;
  background-color: ${({theme,color})=>color? color : theme.color.secondary};
  color: #fff;
  :hover {
    color:#00C6FF;
  }
  `