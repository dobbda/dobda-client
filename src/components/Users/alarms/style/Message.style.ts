import { type } from 'os';
import styled from 'styled-components';

type Props = {
  checked: boolean;
};
export const Li = styled.li<Props>`
  padding: 10px 5px;
  border-bottom: 1px solid hsl(210, 8%, 95%);
  .msg-title {
    margin-left: 5px;
    padding-top: 4px;
    display: flex;
    align-items: center;
    color: #1616ad;
  }

  .message-information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span:nth-child(1) {
      margin-left: 5px;
      font-weight: bold;
      font-size: 12px;
      ::before {
        content: '';
        display: inline-block;
        width: 7px;
        height: 7px;
        margin-right: 10px;
        border-radius: 100%;
        background-color: ${({ checked }) => (checked ? '#ff5b16' : '#ced4da')};
      }
    }
    span:nth-last-child(1) {
      text-align: right;

      color: #7a7899;
      margin-right: 5px;
    }
  }
`;
