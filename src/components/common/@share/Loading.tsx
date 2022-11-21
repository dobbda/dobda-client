import { Space, Spin } from 'antd';
import React from 'react';
import { LoadingIcon } from 'src/icons';
import styled from 'styled-components';
interface Props {
  loading?: boolean;
  large?: boolean;
  size?: number;
}
export const Loading = ({ loading = true, large, size }: Props) => {
  const antIconL = <LoadingIcon style={{ fontSize: 50 }} spin />;

  return (
    <>
      {!large && loading && <LoadingIcon style={{ fontSize: size || 24 }} spin />}
      {large && loading && (
        <Space size="large">
          <LoadingIcon style={{ fontSize: size || 50 }} spin />
        </Space>
      )}
    </>
  );
};

interface LoadingPage {
  size?: number;
  descript?: string;
}
export const LoadingPage = ({ size, descript }: LoadingPage) => {
  return (
    <Bg>
      <Wr>
        <Spin size="large" indicator={<LoadingIcon style={{ fontSize: size | 100 }} spin />} />
        <br />
        <div className="descript">{descript}</div>
      </Wr>
    </Bg>
  );
};

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99;
  background-color: #fffffff9;
`;
const Wr = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
