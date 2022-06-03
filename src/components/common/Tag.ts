import styled from 'styled-components'

interface CardProps {
  type?: string,
}
export const Tag = styled.div<CardProps>`
  padding: 2px 8px 4px;
  margin-right: 2px;
  font-size: 14px;
  border-radius: 5px;
  background-color: ${({type, theme})=> type==="R" ? theme.color.Rcard : theme.color.Qcard};
  :hover {
    transform: scale(1.1);
    transition: all 0.3s;
  }
  `