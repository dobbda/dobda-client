import styled from 'styled-components';
interface Props {
  type?: string;
  selected?: boolean;
  acceped_answer?: boolean;
}
export const CommentWrapper = styled.div<Props>`
  margin-right: -1px;
  border-radius: 5px;
  /* background-color: #ffff; */

  input {
    margin: 10px 20px;
  }
`;

export const ChildView = styled.div`
  padding-left: 25px;
  padding: 6px 0 6px 25px;
  border-top: 1px solid #F2F2F2;
  background-color: #eeee;
  border-radius: 0 0 5px 5px;
  user-select: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .show-replybtn {
    display: flex;
    align-items: center;
    text-align: center;
    :hover {
      color: gray;
    }
  }
  
  .createdAt {
    margin-right: 10px;
    font-weight: 600;
    color: #2e2e2eaa;
  }
`;

export const Viewer = styled.div<Props>`
    background-color: #fff;
    padding:10px 25px;
  
`;

export const Header = styled.div<Props>`
  background-color: ${({acceped_answer,theme})=>acceped_answer ? theme.color.secondary:  "#EEEEEE"};
  height: 45px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c9c9c9;
  border-radius: 5px 5px 0 0;
  .gc-left {
    display: flex;
    align-items: center;
  }

  .gc-right{
    display: flex;
    align-items : center;
    span{
      color: #656565;
      margin-right: 20px;
      font-weight: bold;
      border: 1px solid #cacaca;
      padding: 0 6px 0 10px;
      border-radius: 5px;
      :hover {
        color: #28DA84;
      }
    }
    > * {cursor: pointer;}
  }
`;


