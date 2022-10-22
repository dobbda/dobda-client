import moment from 'moment';
import 'moment/locale/ko';
const getDate = (date: Date | string, fromNow: boolean = false) => {
  return fromNow ? moment(date).fromNow() : moment(date).format('YYYY-MM-DD MM:SS');
};

export default getDate;
