import { BodyWrapper, Title, TagWrapper } from './style/Element';
import { Tag } from 'src/components/common';

import React from 'react';

interface Props {}
export const QBody = (props: Props) => {
  const tagList = ['python', 'Java', 'JavaScript'];
  return (
    <BodyWrapper>
        <Title>
          Engineeringbattery battery ery cathodes. He earned a BS in Mechanicalcathodes. He earned a BS in Mechanical Engineering
          ....cathodes. He earned a BS in Mechanical
        </Title>
      <TagWrapper>
        {tagList.map((tag, i) => (
          <Tag bg={true} key={i}>{tag}</Tag>
        ))}
      </TagWrapper>
    </BodyWrapper>
  );
};

export const RBody = (props: Props) => {
  const tagList = ['python', 'Java', 'JavaScript'];
  return (
    <BodyWrapper>
      <div className="body-column">
        <Title>
          battery cathodes. He earned a BS in Mechanical Engineeringbattery battery cathodes. He earned a BS in Mechanical
          Engineering ....cathodes. He earned a BS in Mechanical Engineering .... ....
        </Title>
      </div>
      <TagWrapper>
        {tagList.map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
      </TagWrapper>
    </BodyWrapper>
  );
};
