import {
  createSearchParamsCache,
  createSerializer,
  parseAsInteger,
  parseAsString,
} from 'nuqs/server'

const searchParams = {
  q: parseAsString.withDefault(''),
  category_id: parseAsInteger,
  page: parseAsInteger.withDefault(1),
}

export const searchParamsCache = createSearchParamsCache(searchParams)

export const serializeSearchParams = createSerializer(searchParams)
