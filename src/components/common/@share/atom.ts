import { CSSProp, CSSProperties } from 'styled-components';
import styled from 'styled-components';
import Image from 'next/image';

export const Hr = styled.div`
  margin: 0;
  border-bottom: 0.5px solid #cdcdcd;
`;

export const NoData = styled.p`
  margin: 0;
  padding: 15px 0 5px 12px;
  color: rgba(110, 110, 110, 1);
`;

export const CreatedAt = styled.span`
  display: flex;
  align-items: center;
  margin: 0;
  color: #888;
  font-size: 12px;
  white-space: nowrap;
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin:10px 0; */
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
`;
