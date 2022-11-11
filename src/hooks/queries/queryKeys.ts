import { QueryKey } from 'react-query';

const Props = Number || String;
export const keys = {
  auth: ['auth'],
  questions: (): QueryKey => ['questions'],
  answers: (qid: number | string): QueryKey => ['question:' + Number(qid), 'answers'],
  comment: (qid: number | string, aid: number | string): QueryKey => [
    'question: ' + Number(qid),
    'answer: ' + Number(aid),
    'comments',
  ],
  qDetail: (qid: number | string): QueryKey => ['question:' + Number(qid), 'detail'],

  sourcings: (): QueryKey => ['sourcings'],
  enquiry: (oid: number | string): QueryKey => ['sourcing: ', Number(oid), 'enquiry'],
  reply: (oid: number | string, eid: number | string): QueryKey => [
    'sourcing: ' + Number(oid),
    'enquirie: ' + Number(eid),
    'reply',
  ],
  oDetail: (oid: number | string): QueryKey => ['outsourcing: ' + Number(oid), 'detail'],

  alarms: (userId: number | string) => ['alarms', 'user:', userId],
  alarmsAll: (userId: number | string) => ['alarmsAll', 'user:', userId],
  userQ: (id: number | string) => ['user: ', id, 'questions'],
  userS: (id: number | string) => ['user: ', id, 'sourcings'],
  coinReserv: ['coinReserv'],
  coinHistory: ['coinHistory'],
};
