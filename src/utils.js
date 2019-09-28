import moment from 'moment';
import { DEFAULT_DATE_FORMAT, DEFAULT_DAYS_OFFSET } from './constants';

export function replacer(match, date, offset, string) {
  return moment(date, DEFAULT_DATE_FORMAT)
    .add(DEFAULT_DAYS_OFFSET, 'days')
    .format(DEFAULT_DATE_FORMAT);
}
