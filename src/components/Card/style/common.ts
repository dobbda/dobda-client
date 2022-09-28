import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  //스크롤 방지
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: fit-content;
`;

export const P = styled.p<{ color?: string }>`
  display: inline;
  color: ${({ color }) => (color ? color : '#686868')};
  font-size: 12px;
`;

export const Gap = styled.div`
  display: inline;
  margin: 0 7px;
`;
