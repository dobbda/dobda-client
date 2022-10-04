import { QueryKey } from 'react-query';
export const keys = {
  auth: ['auth'],
  questions: (title?: string, tag?: string): QueryKey => ['questions', { title: title && title, tag: tag && title }],
  answers: (qid: number | string): QueryKey => ['question', Number(qid), 'answers'],
  comment: (aid: number | string): QueryKey => ['question', 'answers', Number(aid), 'comments'],
  qDetail: (qid: number | string): QueryKey => ['question', 'detail', Number(qid)],

  outsources: (title?: string, tag?: string): QueryKey => ['outsources', { title: title && title, tag: tag && title }],
  enquiries: (oid: number | string): QueryKey => ['outsourcing', Number(oid), 'enquiries'],
  replies: (eid: number | string): QueryKey => ['outsourcing', 'enquiries', Number(eid), 'replies'],
  oDetail: (oid: number | string): QueryKey => ['outsourcing', 'detail', Number(oid)],
};
