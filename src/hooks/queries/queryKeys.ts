import { QueryKey } from 'react-query';
export const keys = {
  auth: ['auth'],
  questions: (title?: string, tag?: string): QueryKey => ['questions', { title: title && title, tag: tag && title }],
  answers: (qid: number | string): QueryKey => ['question', qid, 'answers'],
  comment: (aid: number | string): QueryKey => ['question', 'answers', aid, 'comments'],
  qDetail: (qid: number | string): QueryKey => ['question', 'detail', qid],

  outsources: (title?: string, tag?: string): QueryKey => ['outsources', { title: title && title, tag: tag && title }],
  enquiries: (oid: number | string): QueryKey => ['outsourcing', oid, 'enquiries'],
  replies: (eid: number | string): QueryKey => ['outsourcing', 'enquiries', eid, 'replies'],
  oDetail: (oid: number | string): QueryKey => ['outsourcing', 'detail', oid],
};
