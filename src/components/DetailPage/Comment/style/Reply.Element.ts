import styled from 'styled-components';
interface Props {
  type?: string;
}

export const ReplyItem = styled.div<Props>`
  margin-top: 20px;
  margin-bottom: 5px;
  background-color: #fff;
  border-radius: 10px;
  border : 3px solid #ddd4ff;

  .content-viewer {
    padding: 10px 25px;
  }
  i.reply {
    // icons
    transform: rotate(180deg);
    /* color:gray; */
  }
`;

export const Header = styled.div<Props>`
  height: 45px;

  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #eceef1;
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

export const Content = styled.div<Props>``;
