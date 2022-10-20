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
  line-height: inherit;
`;

export const P = styled.p<{ color?: string }>`
  display: inline;
  color: ${({ color }) => (color ? color : '#686868')};
  font-size: 13px;
  /* line-height: unset; */
`;

export const Gap = styled.div`
  display: inline;
  margin: 0 7px;
`;

export const Title = styled.h2`
  overflow: hidden;
  line-clamp: 2;
  text-overflow: ellipsis;
  word-break: break-word;
  padding: 3px 0;
  font-size: 17px;
  color: #2362ab;
  display: -webkit-box;
  -webkit-line-clamp: 2; // 원하는 라인수
  -webkit-box-orient: vertical;
  :hover {
    text-decoration: underline;
    text-underline-offset: 5px;
    text-decoration-color: #2362ab;
  }
`;
