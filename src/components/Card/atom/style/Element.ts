import styled from 'styled-components'

// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}


// header
export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  .createdAt {
    /* font-weight: 600; */
    color: #b9b9b9;
  }
`

//body 
export const BodyWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`

export const Title = styled.h3`
  overflow: hidden;
  margin:0;
  padding: 0;

  :hover{
    color: #23629f;

  }
`


export const TagWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  cursor: default;
`

//footer
export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top:5px;
  text-align: center;
  align-items: center;
`
