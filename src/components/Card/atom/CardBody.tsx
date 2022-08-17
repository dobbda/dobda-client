import { BodyWrapper, Title } from './style/Element';
import * as Lib from 'src/components/common';

import React from 'react';
import { Tags } from 'src/types';
import { atom } from 'src/components/common';

interface Props {
	title: string,
	tagNames: Tags[],
	createdAt: Date,
	id: number,
}
export const QBody = (props: Props) => {
  const tagList = ['python', 'Java', 'JavaScript'];
  return (
    <BodyWrapper>
      <Lib.Link href={`/questions/detail?createdAt=${props.createdAt}&qid=${encodeURIComponent(props.id)}`} >
        <Title>
						{props.title}
        </Title>
      </Lib.Link>
      <atom.TagWrapper>
        {props.tagNames?.map((tag,i) => (
          <Lib.Tag bg={true} key={tag.name+i}>
            {tag.name}
          </Lib.Tag>
        ))}
      </atom.TagWrapper>
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
      <atom.TagWrapper>
        {tagList.map((tag, i) => (
          <Lib.Tag key={i}>{tag}</Lib.Tag>
        ))}
      </atom.TagWrapper>
    </BodyWrapper>
  );
};
