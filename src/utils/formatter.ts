import { dayjs } from '@/lib/dayjs'

export function formatShortDate(date: Date | string) {
  return dayjs(date).format('DD/MM/BBBB')
}

export function formatMediumDate(date: Date | string) {
  return dayjs(date).format('DD MMM BB')
}

export function formatLongDate(date: Date | string) {
  return dayjs(date).format('DD MMMM BBBB')
}

export function formatLongDateTime(date: Date | string) {
  return dayjs(date).format('DD MMMM BBBB HH:mm:ss')
}

export function formatLongDateTimeMs(date: Date | string) {
  return dayjs(date).format('DD MMMM BBBB HH:mm:ss:SSS').slice(0, -1)
}

export function formatNumber(number: number) {
  return number.toLocaleString()
}

export function formatRelativeDate(date: Date | string) {
  return dayjs(date).fromNow()
}
