import styled from 'styled-components'

const headerFont = "20px"
const wrapperPadding = "20px"

export const ContentWrapper = styled.div`

  border-radius: 4px;
  /* word-wrap:break-word; */
  width: 100%;
  min-height: 600px;
  background-color: #fff;
  border: 1px solid #eeee;
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
    background-color: #fbfbfb;
    padding: 20px;
    padding-bottom: 0;
    border-bottom: 1px solid #ccc;
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
    .createdAt{
    color: ${({ theme }) => theme.color.date};
    padding-top: 3px;
    font-size: 15px;
    font-weight: 600;
    margin-left:10px;
  }

  }
`
export const ContentViewWrapper = styled.div`
padding: 10px 20px;
height: 100%;
`

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 20px 0; 
  padding: 10px;
`

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto 0;
  `

export const EditorWrapper = styled.div`
margin-top:50px;
`