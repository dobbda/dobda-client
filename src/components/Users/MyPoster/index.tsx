import { Segmented } from 'antd';
import Divider from 'antd/lib/divider';
import List from 'antd/lib/list';
import { SegmentedValue } from 'antd/lib/segmented';
import { useState } from 'react';
import { user } from 'src/api';
import OCard from 'src/components/Card/OCard';
import QCard from 'src/components/Card/QCard';
import { Button } from 'src/components/common';
import { keys } from 'src/hooks';
import { useInfinity } from 'src/hooks/queries/common/useInfinity';
import { MyPostList } from 'src/interface/content-type';

import { Wrapper } from './style/MyPost.style';

export const Poster = () => {
  const [category, setCategory] = useState<SegmentedValue>(MyPostList[0]);

  const { data, nextPage, isLoading } = useInfinity<any>({
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
      <Button onClick={() => nextPage} types="primary">
        loading more
      </Button>
    </div>
  ) : null;

  return (
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
        renderItem={(item) => <List.Item>{category == MyPostList[0] ? <QCard data={item} /> : <OCard data={item} />}</List.Item>}
        loading={isLoading}
      />
    </Wrapper>
  );
};

export default Poster;
