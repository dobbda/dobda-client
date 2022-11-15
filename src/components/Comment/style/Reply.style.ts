import styled from 'styled-components';
interface Props {
  type?: string;
}

export const ReplyItem = styled.div<Props>`
  background-color: #f8f9fa;
  border: 1px solid rgba(217, 217, 217, 1);
  margin: -1px;
  .content-viewer {
    padding: 10px;
  }
  i.reply {
    // icons
    transform: rotate(180deg);
    color: rgba(0, 0, 0, 0.35);
    font-size: 25px;
  }
`;

export const Header = styled.div<Props>`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #e6e6e6aa solid;
  /* padding: 10px; */
  .rc-left {
    display: flex;
    align-items: center;
    > * {
      margin-right: 5px;
    }

    h3 {
      font-weight: bold;
      font-size: 15px;
    }
    span {
      //시간
      margin-left: 10px;
      font-weight: 600;
      color: #959595aa;
    }
  }
`;

export const CommentContent = styled.div`
  padding: 0 10px;
`;
