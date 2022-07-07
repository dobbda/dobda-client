import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { Write_Wrapper, EnrQorl, Label, Group, Pilsu } from './style/write.element';
import { Select, DatePicker, DatePickerProps, Input as AntInput, Tag } from 'antd';

import { useClientValue } from 'src/hooks/queryHooks';
import { useQuery, useQueryClient } from 'react-query';
import { Hashtags } from './Hashtags';
import { CoinPopover } from './CoinPopover';
type Props = {};
const Write = () => {
  const queryClient = useQueryClient();
  const [categorie, setCategorie] = useState<string | null>();
  const [deadline, setDeadline] = useState<string | null>();
  const [contentTitle, setContentTitle] = useState<string>("");

  const onChangeCagegory = useCallback((v: string) => {
    setCategorie(v);
  }, []);

  const onCangeData: DatePickerProps['onChange'] = useCallback((date, dateString) => {
    setDeadline(dateString);
    console.log(date, dateString);
  }, []);

  return (
    <Write_Wrapper>
      <EnrQorl>
        <div>
          <Group>
            <Label>카테고리<Pilsu/></Label>
            <br />

            <Select  style={{ width: 140 }} onChange={onChangeCagegory}>
              <Select.Option value="질문">질문하기</Select.Option>
              <Select.Option value="기능요청">기능요청</Select.Option>
            </Select>
          </Group>
          <Group>
            <Label>마감기한</Label>
            <br />
            <DatePicker onChange={onCangeData} placeholder="마감기한" />
          </Group>{' '}
        </div>

        <br />
        <div>
          <Label>태그를 입력해주세요(최대10개)<Pilsu/></Label>

          <Hashtags />
        </div>
        <br />
        <div>
          <Label>코인을 입력해주세요</Label>
          <CoinPopover />
        </div>
      </EnrQorl>
        <Label>제목을 입력해주세요 <Pilsu/></Label>
      <InputTitle value={contentTitle} onChange={(e)=>setContentTitle(e.target.value)}/>
    </Write_Wrapper>
  );
};

export default React.memo(Write);


export const InputTitle = styled(AntInput)`
  min-height: 46px;
  font-size: 15px;
  border-bottom: 1.5px solid;
`