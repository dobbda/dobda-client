import { LoadingOutlined } from '@ant-design/icons';
import { Space, Spin } from 'antd';
import React from 'react';
interface Props {
  loading: boolean;
  many?: boolean;
}
export const Loading = ({ loading, many }: Props) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      {!many && loading && <Spin indicator={antIcon} />}
      {many && loading && (
        <Space size="middle">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
        </Space>
      )}
    </>
  );
};
