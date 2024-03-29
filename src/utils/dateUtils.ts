import { format } from 'date-fns'

export const DATE_SAMPLE = 'Mar 19, 2022'
export const DATE_FORMAT = 'MMM dd, yyy'

export const formatDate = (date: Date) => {
  return format(date, DATE_FORMAT)
}
