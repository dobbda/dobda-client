import styled from 'styled-components';
interface Props {
  type?: string;
}

export const ReplyItem = styled.div<Props>`
  /* padding:10px 25px; */
  .content-viewer {
    padding: 10px 25px;
  };
  margin-top:-1px;
  border-bottom: 1px solid ${({theme})=> theme.color.comment_border};
  border-top: 1px solid ${({theme})=> theme.color.comment_border};
  background-color: #FDFDFD;
`;

export const Header = styled.div<Props>`
  height: 45px;

  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ECEEF1;
  .rc-left {
    display: flex;
    align-items: center;
    > * {
      margin-right: 5px;
    }
      .avatar {
      border-radius: 100%;
    }
    h3 {
      margin-left:10px;
      display: inline-block;
      font-weight: bold;
      font-size: 15px;
      color: ${({ theme }) => theme.color.primary};
    }
    span{ //시간
      margin-left: 10px;
      font-weight: 600;
      color: #959595aa;
    }
  }
`;

export const Content = styled.div<Props>``;
