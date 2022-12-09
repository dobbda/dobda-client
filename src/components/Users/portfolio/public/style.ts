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
  }
  .work_field {
    display: flex;
    flex-flow: wrap;
    max-height: 25px;
    gap: 4px;
    margin-bottom: 10px;
    overflow: hidden;
  }
  .work_skill {
    display: flex;
    flex-flow: wrap;
    gap: 4px;
    max-height: 50px;
    overflow: hidden;

    span {
      align-items: center;
      display: flex;
      justify-content: center;
      padding: 0 10px;
      background: #fff;
      border-radius: 19px;
      font-size: 11px;
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
