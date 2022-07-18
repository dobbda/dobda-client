import React from 'react';
import { Div, BaseInfo, UserActive, Item, P, UserTech } from './style/userInfo.Element';
import Image from 'next/image';

import { Tag } from 'src/components/common';
type Props = {};

export function UserInfo({}: Props) {
  return (
    <Div>
      <BaseInfo>
        <Image src="https://joeschmoe.io/api/v1/random" width="35" height="35" alt="" />
        <h3>쭈꾸미</h3>
        <p className="e-mail">bixby-beta@gmail.com</p>

        <P>A list of sources to use for different screen resolutions</P>
      </BaseInfo>

      <UserActive>
        <Item>
          <P>활동점수</P>
          <em>10</em>
        </Item>
        <Item>
          <P>답변</P>
          <em>10</em>
        </Item>
        <Item>
          <P>채택</P>
          <em>10</em>
        </Item>

        <Item>
          <P>질문</P>
          <em>10</em>
        </Item>
      </UserActive>
      <UserTech>
        <h3>Tech Stacks</h3>
        <br />
        <div>
          <Tag>python</Tag>
          <Tag>frontend</Tag>
          <Tag>python</Tag>
        </div>
        <br />
        <div>
          <Tag bg={true}>python</Tag>
          <Tag bg={true}>frontend</Tag>
          <Tag bg={true}>python</Tag>
        </div>
      </UserTech>
    </Div>
  );
}
