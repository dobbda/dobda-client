import styled from 'styled-components';

export const Menu = styled.div`
  width: 100vw;
  background-color: #fff;
  & > div {
    display: flex;
    margin: 6px 0 6px 12px;
    height: 25px;
    line-height: 25px;
    & > span {
      display: flex;
      align-items: center;
      margin-right: 4px;
      & > svg {
        transform: scale(0.6);
      }
    }
  }
`;

export const AlarmWrapper = styled.div`
  width: 100vw;
  background-color: #fff;
`;

export const AlarmNumberWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  height: 40px;
  font-size: 16px;
`;

export const AlarmContentWrapper = styled.div`
  padding: 4px 12px;
`;

export const AlarmTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  & > svg {
    transform: scale(0.7);
  }
`;

export const ColorBar = styled.div`
  width: 4px;
  height: 20px;
  background-color: #ff00ff;
  margin: 0 4px;
`;

export const AlarmContent = styled.div`
  margin-left: 37px;
`;
