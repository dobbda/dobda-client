import { BodyWrapper, Title, TagWrapper } from './style/Element';
import * as Lib from 'src/components/common';

import React from 'react';

interface Props {}
export const QBody = (props: Props) => {
  const tagList = ['python', 'Java', 'JavaScript'];
  return (
    <BodyWrapper>
      <Lib.Link href={`/questions/${encodeURIComponent(10)}`} >
        <Title>
          Engineeringbattery battery ery cathodes. He earned a BS in Mechanicalcathodes. He earned a BS in Mechanical Engineering
          ....cathodes. He earned a BS in Mechanical
        </Title>
      </Lib.Link>
      <TagWrapper>
        {tagList.map((tag, i) => (
          <Lib.Tag bg={true} key={i}>
            {tag}
          </Lib.Tag>
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
        <Lib.Link href={`/requests/${encodeURIComponent(10)}`} scroll={false}>
        <Title>
          battery cathodes. He earned a BS in Mechanical Engineeringbattery battery cathodes. He earned a BS in Mechanical
          Engineering ....cathodes. He earned a BS in Mechanical Engineering .... ....
        </Title>
        </Lib.Link>
      </div>
      <TagWrapper>
        {tagList.map((tag, i) => (
          <Lib.Tag key={i}>{tag}</Lib.Tag>
        ))}
      </TagWrapper>
    </BodyWrapper>
  );
};
