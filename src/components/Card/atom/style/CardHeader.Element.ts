import styled from 'styled-components'

// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}


// header
export const HeaderWrapper = styled.header`
  width: ${({theme})=> theme.media.cardMinWidth};
  height: 52px;
  align-items: center;
  padding: 0 10px;
  margin: 0 auto;
`
export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`