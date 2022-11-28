import React, { useCallback } from 'react';
import { Empty, Link } from 'src/components/common';
import { Div } from './style/style';
import { Li } from './style/Message.style';
import { Alarm, AlarmType, Auth } from 'src/types';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
import { keys, useAuth } from 'src/hooks';
import produce from 'immer';
import { user } from 'src/api';
import getDate from 'src/lib/utils/dateForm';
type Props = {
  data: Alarm[];
};

export const Alarms = () => {
  const { auth, refetch } = useAuth();
  const { data } = useQuery(keys.alarms(auth?.id), user.alarms, {
    enabled: !!auth?.id,
  });
  // const data: Alarm[] = [];
  return (
    <Div>
      <h1>최근 알림</h1>
      <ul>
        {data && data?.length > 0 ? (
          data?.map((x: Alarm, i) => <Message data={x} key={i} />)
        ) : (
          <Empty descript="최근 알림이 없습니다." />
        )}
      </ul>
      <div className="show-all-messages">
        {data?.length > 0 && <Link href={`/user?id=${auth?.id}&cg=alarm`}>전체알림 보기</Link>}
      </div>
    </Div>
  );
};

const Message = ({ data }: { data: Alarm }) => {
  const queryClient = useQueryClient();
  const { auth, refetch } = useAuth();

  const viewChecked = useCallback(async () => {
    if (!data.checked) {
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
          <span>[ {AlarmType[data.type]} ]</span>
          <span>{getDate(data?.createdAt, true)}</span>
        </div>
        <div className="msg-title">{data?.content.content}</div>
      </Link>
    </Li>
  );
};
