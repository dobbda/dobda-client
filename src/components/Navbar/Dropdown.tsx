import ListIcon from '../icon/svg/b_list.svg';
import MycoinIcon from '../icon/svg/b_mycoin.svg';
import RuleIcon from '../icon/svg/b_rule.svg';
import NoticeIcon from '../icon/svg/b_notice.svg';
import UserIcon from '../icon/svg/b_user.svg';
import {
  AlarmContent,
  AlarmContentWrapper,
  AlarmNumberWrapper,
  AlarmTitle,
  AlarmWrapper,
  ColorBar,
  Menu,
} from './style/Dropdown.Element';

export const menu = (
  <Menu>
    <div>
      <span>
        <RuleIcon />
      </span>
      규칙
    </div>
    <div>
      <span>
        <NoticeIcon />
      </span>
      공지
    </div>
  </Menu>
);

const ALARM_MESSAGES = [
  {
    id: 1,
    type: 'reply',
    title: '라이브러리 사용 방법',
  },
  {
    id: 2,
    type: 'coin',
    title: '10000',
  },
  {
    id: 3,
    type: 'reply',
    title: '웹팩 하는 법',
  },
  {
    id: 4,
    type: 'notice',
    title: '새로운 기능 알림',
  },
  {
    id: 5,
    type: 'select',
    title: '이거 오류 어떻게 해요???',
  },
];

const ALARM_TYPE: JSONObject = {
  reply: { name: '댓글', color: '#ff00ff', content: '글에 댓글이 달렸습니다.' },
  coin: { name: '코인', color: '#0000ff', content: ' 코인이 추가 되었습니다.' },
  notice: { name: '공지', color: '#ff0000', content: ' 공지!!' },
  select: { name: '채택', color: '#ffff00', content: '글의 댓글이 채택 되었습니다.' },
};

interface JSONObject {
  [x: string]: { name: string; color: string; content: string };
}

export const alarm = (
  <AlarmWrapper>
    <AlarmNumberWrapper>미확인 알림 ({ALARM_MESSAGES.length})개</AlarmNumberWrapper>
    {ALARM_MESSAGES.map((props) => (
      <AlarmContentWrapper key={props.id}>
        <AlarmTitle>
          <UserIcon />
          <ColorBar style={{ backgroundColor: ALARM_TYPE[props.type].color }} />
          <div>{ALARM_TYPE[props.type].name} 알림</div>
        </AlarmTitle>
        <AlarmContent>
          <div>{`'${props.title}'${ALARM_TYPE[props.type].content}`}</div>
        </AlarmContent>
      </AlarmContentWrapper>
    ))}
  </AlarmWrapper>
);

export const user = (
  <Menu>
    <div>
      <span>
        <ListIcon />
      </span>
      내 글(10)
    </div>
    <div>
      <span>
        <MycoinIcon />
      </span>
      코인
    </div>
    <div>로그아웃</div>
  </Menu>
);
