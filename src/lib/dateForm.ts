import { dateType } from 'aws-sdk/clients/iam';
import moment from 'moment';
import 'moment/locale/ko';
const getDate = (date: dateType | string, fromNow: boolean = false) => {
  return fromNow ? moment(date).fromNow() : moment(date).format('YYYY-MM-DD');
};

export default getDate;
