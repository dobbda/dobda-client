import styled from 'styled-components';

export const Div = styled.div`
  background-color: ${({ theme }) => theme.color.main2};
  height: 40px;
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 0 12px;
  & > .logo {
    font-weight: 600;
    font-size: 26px;
    line-height: 40px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  svg {
    transform: scale(0.8);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60px;
  & > div {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    transform: scale(0.8);
  }
`;
