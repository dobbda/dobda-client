import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
dayjs.locale('ko');
dayjs.extend(relativeTime);
const getDate = (date: Date | string, fromNow: boolean = false) => {
  return fromNow ? dayjs(date).fromNow() : dayjs(date).format('YYYY-MM-DD | hh:mm');
};

export default getDate;
