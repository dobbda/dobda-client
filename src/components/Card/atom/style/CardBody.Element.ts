import styled from 'styled-components'

// ({theme})=> theme.color
interface CardProps {
  type?: string,
  color?: string,
}


//body
export const BodyWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  height: 140px;
  background: #fff;
  padding: 5px 10px;
  

  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  .body-column{
    width: 340px;
    margin: 0 auto;
    padding: 0 10px;
  }
`

export const Title = styled.h1`
  font-size:20px;
  margin:0;
  padding: 0;
  cursor: pointer;
`

export const Content = styled.p`
  color: #969696;
  max-height: 69px;
  overflow: hidden;
  cursor: pointer;

  margin:0;
  padding: 0;
`


export const TagWrapper = styled.div`
  display: flex;
  margin: 10px auto;
  cursor: pointer;
`