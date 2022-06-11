import styled from 'styled-components'

// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}


//footer
export const FooterWrapper = styled.div`
  width: 100%;
  height: 45px;
  margin: 0 auto;
  padding: 0 10px;
  border-top: 1px solid #efefef;

`
export const FooterContent = styled.div`
  width: 100%;
  height:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`