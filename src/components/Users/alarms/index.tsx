import Divider from 'antd/lib/divider';
import List from 'antd/lib/list';
import axios from 'axios';
import produce from 'immer';
import Link from 'next/link';
import React, { useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { user } from 'src/api';
import { keys, useAuth } from 'src/hooks';
import { Layout } from 'src/Layout';
import getDate from 'src/lib/utils/dateForm';
import { Alarm, AlarmType } from 'src/types';
import styled from 'styled-components';
import { Li } from './style/Message.style';

type Props = {};

export const MyAlarm = (props: Props) => {
  const queryClient = useQueryClient();
  const { auth, refetch } = useAuth();
  const { data } = useQuery(keys.alarmsAll(auth?.id), user.alarmsAll, {
    enabled: !!auth?.id,
  });

  const viewChecked = useCallback(async (item: Alarm) => {
    if (!item.checked) {
      try {
        const success = (await axios.patch('/api/alarms/' + item.id)).data.success;
        if (success) {
          queryClient.cancelQueries(keys.alarms(auth?.id));
          queryClient.cancelQueries(keys.alarmsAll(auth?.id));
          queryClient.setQueryData(keys.alarms(auth?.id), (old: Alarm[]) => {
            return produce(old, (draft) => {
              draft.find((alarm) => alarm.id === item.id).checked = true;
            });
          });
          queryClient.setQueryData(keys.alarmsAll(auth?.id), (old: Alarm[]) => {
            return produce(old, (draft) => {
              draft.find((alarm) => alarm.id === item.id).checked = true;
            });
          });
        }
      } catch {}
    }
  }, []);

  const getLink = (alarm: Alarm) => {
    const link = alarm?.content.questionId
      ? `/questions/` + alarm?.content.questionId
      : `/custom-project/requests/` + alarm?.content.outSourcingId;
    return link;
  };

  return (
    <div>
      <Divider orientation="left">
        <h3>전체 알림</h3>
      </Divider>
      <div>
        {data?.map((item: Alarm, i) => (
          <Link href={getLink(item)} key={i}>
            <Item onClick={() => viewChecked(item)}>
              <Info>
                <Type checked={!item.checked}>[ {AlarmType[item.type]} ]</Type>
                <span>{getDate(item.createdAt)}</span>
              </Info>
              <Content>{item.content.content}</Content>
            </Item>
          </Link>
        ))}
        {data && data[0] == undefined && <span> 최근 알림이 없습니다.</span>}
      </div>
    </div>
  );
};

const Item = styled.div`
  cursor: pointer;
  border-bottom: solid 1px #f0f0f0;
  padding: 10px 0;
`;
const Info = styled.div`
  padding: 3px 5px;
  display: flex;
  justify-content: space-between;
`;
const Type = styled.div<{ checked: boolean }>`
  ::before {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 10px;
    border-radius: 100%;
    background-color: ${({ checked }) => (checked ? '#ff5b16' : '#ced4da')};
  }
`;
const Content = styled.h4`
  margin: 0;
  padding: 0 10px;
  color: #1616ad;
`;

export default MyAlarm;
