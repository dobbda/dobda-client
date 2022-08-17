import { type } from 'os';
import styled from 'styled-components';

type Props = {
  checked: boolean;
};
export const Li = styled.li<Props>`
  padding: 10px 5px;
  border-bottom: 1px solid hsl(210,8%,95%);
  .msg-title {
    display: flex;
    align-items: center;
    color: #1616ad;
  }

  .msg-title::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 10px;
    border-radius: 100%;
    background-color: ${({ checked }) => (checked ? '#ff5b16' : '#a9a9a9')};
  }

  .message-information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-child(1) {
      margin-left: 16px;
      font-weight: bold;
      font-size: 12px;
    }
    span:nth-last-child(1) {
      text-align: right;

      color: #7a7899;
      margin-right: 5px;
    }
  }
`;
