import styled from 'styled-components';

export const Div = styled.div`
  background-color: #fbf8f8;
  border: solid 1.5px ${({ theme }) => theme.color.border1};
  border-radius: 4px;
  min-height: 200px;
  width: 100%;

  align-items: center;
  justify-content: center;
`;
export const P = styled.p`
  font-size: 13px;
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
  .e-mail {
    color: #52547e;
    font-size: 15px;
  }
`;

export const UserActive = styled.div`
  display: flex;
  border-top: solid 1px #d6d6d6;
  border-bottom: solid 1px #d6d6d6;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

export const Item = styled.div`
  border: solid 1px #d6d6d6;
  margin: -1px -0.5px;
  padding: 5px 10px;

  span,
  em {
    font-size: 16px;
    color: #52547e;
  }
`;

export const UserTech = styled.div`
  min-height: 50px;
  text-align: center;
  margin: 10px 0;
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;
