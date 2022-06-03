import styled from 'styled-components'

// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}


//footer
export const FooterWrapper = styled.div`
  width: ${({theme})=> theme.media.cardMinWidth};
  height: 52px;
  margin: 0 auto;

`
export const FooterContent = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`