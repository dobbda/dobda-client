import styled from 'styled-components'

interface CardProps {
  type?: string,
}
export const Tag = styled.div<CardProps>`
  padding: 2px 8px 4px;
  margin-right: 2px;
  font-size: 14px;
  border-radius: 5px;
  background-color: ${({theme})=>theme.color.secondary};
  color: #fff;
  :hover {
    color:#00C6FF;
  }
  `