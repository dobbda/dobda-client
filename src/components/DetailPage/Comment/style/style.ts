import { theme } from 'src/styles/Theme';
import styled from 'styled-components';
interface Props {
  type?: string;
  selected?: boolean;
  acceped_answer?: boolean;
}

const wrapperPadding = '25px';
export const CommentWrapper = styled.div<Props>`
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  /* filter: drop-shadow(0px 2px 10px rgba(168, 168, 168, 0.25)); */
  .moreBtn {
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const ChildView = styled.div`
  border: 1px solid #d9d9d9;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: -1px;
  height: 40px;
  padding: 0 40px;
  .show-replybtn {
    display: flex;
    align-items: center;
    text-align: center;
    span {
      margin: 0 10px;
      margin-bottom: 3px;
      font-weight: 500;
      text-align: center;
    }
  }
`;

export const Viewer = styled.div<Props>`
  background-color: #fff;
  padding: 0 25px 25px;
`;

export const Header = styled.div<Props>`
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .gc-left {
    display: flex;
    align-items: center;
  }
`;

export const CommentEditor = styled.div`
  padding: 8px;
`;
export const Name = styled.p`
  display: inline;
  color: ${theme.color.secondary};
`;
