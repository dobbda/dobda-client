import styled from 'styled-components';

export const Wrap = styled.div`
  cursor: default;
  /* width: 50%; */
  overflow: hidden;
  border: solid 1px #f3f5f7;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  .contents {
    background-color: #fafbfc;
    padding: 10px 8px;
  }
  #field {
    padding: 0 5px;
  }
  .work_field {
    overflow: hidden;
    font-size: 14px;
    color: #585858;
    margin-bottom: 10px;
  }
  .work_skill {
    overflow: hidden;
    font-size: 13px;
    color: #707070;
    display: flex;
    gap: 4px;
    overflow: hidden;

    span {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0 12px;
      background: #fff;
      border-radius: 19.5px;
      height: 35px;
      font-size: 13px;
      color: #555969;
    }
  }

  :hover {
    #bgimage {
      scale: 1.05;
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;

  #job {
    color: rgb(106, 114, 206);
    font-size: 12px;
  }
  #nickname {
    margin-left: 10px;
  }
`;
