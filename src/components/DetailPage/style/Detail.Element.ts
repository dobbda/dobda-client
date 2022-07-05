import styled from 'styled-components'

const headerFont = "20px"
const wrapperPadding = "20px"

export const PostContainer = styled.div`

  height: 100%;
  margin-top:-20px;
  
  @media screen and (max-width: ${({ theme }) => theme.media.tablet}){
    margin-top:-10px;
  } 

`

export const ContentWrapper = styled.div`

  border-radius: 4px;
  /* word-wrap:break-word; */
  padding: ${wrapperPadding};
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  border: 1px solid ${({ theme }) => theme.color.border};
`
export const CoinWrapper = styled.div`
  color: #666666;
  font-size: ${headerFont};
  display: flex;
  font-weight: bold;
  align-items: center;
  p {
    margin:0;
    margin-right: 5px;
    color: #8400EC;

  }
`
export const ContentHeader = styled.header`

  .deadline {
  color: #666666;
  font-size: ${headerFont};
  font-weight: bold;
  }  

  
  >*  {
    margin-top:10px;
  }
  h1, h2, h3 { //제목
    display: inline;
    font-weight:650;
    line-height: 1.4;
    margin-bottom: 30px;
  }

  .created-user{
    padding-right:10px;
    display: flex;
    justify-content: space-between;

    padding: 5px;
    background-color: #e9ecef;
    border-bottom: 3px solid #C9C9C9;
    .createdAt{
    color: ${({ theme }) => theme.color.date};
    padding-top: 3px;
    font-size: 15px;
    font-weight: 600;
    margin-left:10px;
  }

  }
`
export const ContentView = styled.header`


`

export const CommentContainer = styled.div`


`

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto 0;
  `