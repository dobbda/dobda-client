import { Skeleton as AntSkeleton } from 'antd';
import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import { Hr } from '../common/@share/atom';
import styled from 'styled-components';
interface Props {
  len?: number;
  avatar?: boolean;
  row?: number;
  hr?: boolean;
  border?: boolean;
  title?: boolean;
  image?: boolean;
}
export const Skeleton = ({ image = false, border = false, len = 1, row = 3, avatar = false, title = false }: Props) => {
  const listData = Array.from({ length: len }).map((_, i) => (
    <div key={i} css={border && { border: 'solid 3px #d1d1d1ea', padding: '10px', margin: '20px 10px', borderRadius: '4px' }}>
      {image && <Image />}
      <AntSkeleton avatar={avatar} active title={title} paragraph={{ rows: row }} />
    </div>
  ));

  return <>{listData}</>;
};

const Image = styled(AntSkeleton.Image)`
  width: 100% !important;
`;
