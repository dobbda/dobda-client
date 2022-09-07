import { QueryKey } from 'react-query';
export const keys = {
  auth: 'auth',
  questions: (title?: string, tag?: string): QueryKey => ['questions', { title: title && title, tag: tag && title }],
  answers: (qid: number | string): QueryKey => ['question', qid, 'answers'],
  comment: (aid: number | string): QueryKey => ['question', 'answers', aid, 'comment'],
  qDetail: (qid: number | string): QueryKey => ['question', 'detail', qid],

  outsources: (title?: string, tag?: string): QueryKey => ['outsources', { title: title && title, tag: tag && title }],
  enquiries: (oid: number | string): QueryKey => ['outsource', oid, 'answers'],
  replies: (eid: number | string): QueryKey => ['outsource', 'answers', eid, 'comment'],
  oDetail: (oid: number | string): QueryKey => ['outsource', 'detail', oid],
};
