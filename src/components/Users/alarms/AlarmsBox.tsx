import React, { useCallback } from 'react';
import { Empty, Link } from 'src/components/common';
import { Div } from './style/style';
import { Li } from './style/Message.style';
import { Alarm, Auth } from 'src/types';
import axios from 'axios';
import { useQueryClient } from 'react-query';
import { keys, useAuth } from 'src/hooks';
import produce from 'immer';
type Props = {
  data: Alarm[];
};

export const Alarms = ({ data }: Props) => {
  return (
    <Div>
      <h1>최근 알림</h1>
      <ul>{data[0] ? data?.map((x: Alarm, i) => <Message data={x} key={i} />) : <Empty />}</ul>
      <div className="show-all-messages">
        <Link href="#">전체알림 보기</Link>
      </div>
    </Div>
  );
};

const Message = ({ data }: { data: Alarm }) => {
  const queryClient = useQueryClient();
  const { auth, refetch } = useAuth();

  const viewChecked = useCallback(async () => {
    if (data.checked) {
      await axios.patch('/api/alarms/' + data.id).then((res) => {
        if (res.data.success) {
          queryClient.cancelQueries(keys.alarms(data?.id));
          queryClient.setQueryData(keys.alarms(auth?.id), (old: Alarm[]) => {
            return produce(old, (draft) => {
              draft.find((alarm) => alarm.id === data.id).checked = true;
            });
          });
        }
      });
    }
  }, [data]);

  const link = data?.content.questionId
    ? `/questions/` + data?.content.questionId
    : `/custom-project/requests/` + data?.content.outSourcingId;

  return (
    <Li checked={!data.checked} onClick={viewChecked}>
      <Link href={link}>
        <div className="message-information">
          <span>[ 댓글알림 ]</span>
          <span>{data?.createdAt.substring(0, 11)}</span>
        </div>
        <div className="msg-title">{data?.content.content}</div>
      </Link>
    </Li>
  );
};
