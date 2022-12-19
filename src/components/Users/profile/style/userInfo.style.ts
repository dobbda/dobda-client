import styled from 'styled-components';

export const Div = styled.div`
  border: solid 1.5px ${({ theme }) => theme.color.border1};
  border-radius: 4px;
  min-height: 200px;
  width: 250px;

  align-items: center;
  justify-content: center;
`;
export const P = styled.p`
  font-size: 12px;
  color: #828282;
  text-align: center;
  margin: 0;
`;

export const BaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 4px 4px 0 0;
  background-color: #fff;
  padding: 15px 0;
  img {
    border-radius: 100%;
    color: #333333;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  .e-nickname {
    color: #52547e;
    font-size: 15px;
    margin-bottom: 10px;
  }
`;

export const UserActive = styled.div`
  display: flex;
  border-top: solid 1px #d6d6d6;
  border-bottom: solid 1px #d6d6d6;

  justify-content: center;
  text-align: center;
  background-color: #fbf8f8;
`;

export const Item = styled.div`
  padding: 5px;
  width: 25%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  span {
    font-size: 12px;
    color: #8f8f8f;
  }
  span:last-child {
    color: #6e6e6e;
  }
`;

export const UserTech = styled.div`
  text-align: center;
  padding: 20px 10px;
  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #262626;
    overflow: hidden;
    gap: 15px;
  }
  div.tagWrap {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
    flex-wrap: wrap;
  }
`;
