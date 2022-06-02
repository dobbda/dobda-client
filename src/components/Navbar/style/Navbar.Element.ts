import styled from 'styled-components';

export const Div = styled.div`
  background-color: ${({ theme }) => theme.color.main2};
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 36px 0 0 0;
  color: #fff;
  & > .logo {
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 26px;
    margin-bottom: 28px;
  }
  & > .login {
    display: flex;
    margin: 0 0 18px 12px;
  }
  & > .content {
    & > div {
      display: flex;
      margin: 0 0 18px 12px;
      height: 25px;
      line-height: 25px;
      & > span {
        display: flex;
        align-items: center;
        margin-right: 6px;
        & > svg {
          transform: scale(0.7);
        }
      }
    }
  }
`;
