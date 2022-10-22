import { Segmented } from 'antd';
import Divider from 'antd/lib/divider';
import List from 'antd/lib/list';
import { SegmentedValue } from 'antd/lib/segmented';
import Link from 'next/link';
import React, { useState } from 'react';
import { user } from 'src/api';
import OCard from 'src/components/Card/OCard';
import QCard from 'src/components/Card/QCard';
import { Button } from 'src/components/common';
import { Hr } from 'src/components/common/@share/atom';
import { keys } from 'src/hooks';
import { userLoadMore } from 'src/hooks/common/useLoadMore';
import { OutSource } from 'src/icons/Icon';
import { Question } from 'src/types';
import { MyPostList } from 'src/types/content-type';
import { UserPage } from '../UserPage';

import { ListWrapper, Wrapper } from './style/MyPost.style';

export const Poster = () => {
  const [category, setCategory] = useState<SegmentedValue>(MyPostList[0]);

  const { data, nextPage } = userLoadMore<any>({
    queryKey: category == MyPostList[0] ? keys.userQ(1) : keys.userS(1),
    fetch: category == MyPostList[0] ? (page: number) => user.question(page) : (page: number) => user.sourcing(page),
  });

  const loadMore = !data?.isLast ? (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 32,
        lineHeight: '32px',
      }}
    >
      <Button onClick={nextPage} types="primary">
        loading more
      </Button>
    </div>
  ) : null;

  return (
    <UserPage>
      <Wrapper>
        <Divider orientation="left">
          <h2>내 글 목록</h2>
        </Divider>
        <br />

        <Segmented block options={MyPostList} value={category} onChange={(value: SegmentedValue) => setCategory(value)} />
        <br />
        <List
          bordered
          dataSource={data?.result}
          loadMore={loadMore}
          css={{ maxHeight: '700px', overflow: 'auto', paddingBottom: '10px' }}
          renderItem={(item) => (
            <List.Item>{category == MyPostList[0] ? <QCard data={item} /> : <OCard data={item} />}</List.Item>
          )}
        />
      </Wrapper>
    </UserPage>
  );
};
