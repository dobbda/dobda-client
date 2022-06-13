import styled from 'styled-components'

// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}


// header
export const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 10px;
  margin: 0 auto;
  border-bottom: solid 2px rgba(70, 86, 102, 0.1);
  .createdAt {
    font-weight: 600;
    color: #b9b9b9;
  }
`
export const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`