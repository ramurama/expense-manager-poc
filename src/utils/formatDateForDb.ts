import { format } from 'date-fns'

export function formatDateForDB(date: Date) {
  return format(date, 'yyyy-MM-dd HH:mm:ss')
}
