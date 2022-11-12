import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';
import React from 'react';
import styled from 'styled-components';
interface Props {
  loading: boolean;
  large?: boolean;
}
export const Loading = ({ loading, large }: Props) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const antIconL = <LoadingOutlined style={{ fontSize: 50 }} spin />;

  return (
    <>
      {!large && loading && <Spin indicator={antIcon} />}
      {large && loading && (
        <Space size="large">
          <Spin size="large" indicator={antIconL} />
        </Space>
      )}
    </>
  );
};

export const LoadingPage = () => {
  const antIconL = <LoadingOutlined style={{ fontSize: 100 }} spin />;

  return (
    <Bg>
      <Wr>
        <Space size="large">
          <Spin size="large" indicator={antIconL} />
        </Space>
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
`;
