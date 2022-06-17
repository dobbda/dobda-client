import styled from 'styled-components'

const headerFont = "22px"
const wrapperPadding = "20px"

export const PostContainer = styled.div`

  height: 100%;
  margin:20px;
  
  @media screen and (max-width: ${({ theme }) => theme.media.medium}){
    margin:5px;
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
    padding:0 10px;
    color: #8400EC;

  }
`
export const ContentHeader = styled.header`

   border-bottom: 3px solid #C9C9C9; 
  .deadline {
  color: #666666;
  font-size: ${headerFont};
  font-weight: bold;
  }  

  
  >*  {
    margin-top:10px;
  }
  h1,h2 { //제목
    display: inline;
    font-weight:650;
    line-height: 1.4;
    margin-bottom: 30px;
  }

  .created-user{
    padding-right:10px;
    display: inline-flex;

    align-items: flex-end;
    margin-bottom: 5px;
    .createdAt{
    color: ${({ theme }) => theme.color.date};
    font-size: 15px;
    font-weight: bold;
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