import React from 'react';
import { useQuery } from 'react-query';

import { CategoriesEvent } from '../../lib/categoryHover';
import { Wrapper } from './style/MyPost.style';
import QCard from '../Card/QCard';
import OCard from '../Card/OCard';

interface Props {
  children?: React.ReactNode;
}

const MyPost = ({ children }: Props) => {
  const { data, error } = useQuery('questions', {
    initialData: '',
    staleTime: Infinity,
  });

  return (
    <Wrapper>
      <h1>내 작성글</h1>

      <ul className="my-content">
          {/* <QCard />
          <QCard />
          <RCard /> */}
      </ul>
    </Wrapper>
  );
};

export default MyPost;
