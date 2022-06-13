import styled from 'styled-components'

//body
export const BodyWrapper = styled.div`
  width: 100%;
  height: 140px;
  background: #fff;
  padding: 5px 10px;
  .body-column{
    width: 100%;
    margin: 0 auto;
    padding: 0 10px;
    height:98px;
    overflow: hidden;
    cursor: pointer;

  }

`

export const Title = styled.h1`
  font-weight: bold;
  font-size:20px;
  margin:0;
  overflow: hidden;
  padding: 0;
  line-height: 1.2;
  color: #4D5762;
`

export const Content = styled.p`
  color: #969696;
  max-height: 66px;
  overflow: hidden;
  margin:0;
  padding: 0;
`


export const TagWrapper = styled.div`
  display: flex;
  margin: 5px auto;
`