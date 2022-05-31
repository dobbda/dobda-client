import {
  BodyWrapper,
  Title,
  Content,
  TagWrapper,

} from './style/CardBody.Element';
import {Tag} from '../../common/Tag'

import React from 'react';

interface Props {
  
};
export const QBody = (props: Props) => {
  const tagList = ["python", "Java", "JavaScript"]
  return (
  <BodyWrapper>
    <div className='body-column'>
      <Title>
        제목입니다
      </Title>
      <Content>
        battery cathodes. He earned a BS in Mechanical Engineeringbattery battery cathodes. He earned a BS in Mechanical Engineering  ....cathodes. He earned a BS in Mechanical Engineering  ....  ....
      </Content>
      <TagWrapper>
        {tagList.map((tag,i)=> <Tag key={i}>{tag}</Tag>)}
      </TagWrapper>
    </div>
  </BodyWrapper>
  );
};

export const RBody = (props: Props) => {
  const tagList = ["python", "Java", "JavaScript"]
  return (
  <BodyWrapper>
    <div className='body-column'>
      <Title>
        제목입니다
      </Title>
      <Content>
        battery cathodes. He earned a BS in Mechanical Engineeringbattery battery cathodes. He earned a BS in Mechanical Engineering  ....cathodes. He earned a BS in Mechanical Engineering  ....  ....
      </Content>
      <TagWrapper>
        {tagList.map((tag,i)=> <Tag key={i} type="R">{tag}</Tag>)}
      </TagWrapper>
    </div>
  </BodyWrapper>
  );
};