import { useMemo } from 'react'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

interface Props {
  searchParams?: Record<string, string | number | null>
  page?: number | null
  total?: number | null
  className?: string
}

const ELLIPSIS = -1
const SIBLINGS = 1

export default function ServerPagination({ searchParams, page, total, className }: Props) {
  const paginationItems = useMemo(() => {
    if (!page || !total)
      return []
    if (total === 1)
      return [1]

    const items: number[] = []

    // Always show first page
    items.push(1)

    // Add ellipsis after first page if needed
    if (page > SIBLINGS * 2) {
      items.push(ELLIPSIS)
    }

    // Add pages around current page
    for (let i = Math.max(2, page - SIBLINGS); i <= Math.min(total - 1, page + SIBLINGS); i++) {
      items.push(i)
    }

    // Add ellipsis before last page if needed
    if (page < total - SIBLINGS - 1) {
      items.push(ELLIPSIS)
    }

    // Always show last page if more than one page
    items.push(total)

    return items
  }, [page, total])

  const getPageHref = (pageNum: number) => ({
    pathname: '',
    query: {
      ...searchParams,
      page: pageNum,
    },
  })

  const isFirstPage = page === 1
  const isLastPage = page === total
  const isActive = (p: number) => p === page

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationFirst
            disabled={isFirstPage}
            href={getPageHref(1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationPrevious
            disabled={isFirstPage}
            href={getPageHref(Math.max(page! - 1, 1))}
          />
        </PaginationItem>
        {paginationItems.map((item, i) => (
          <PaginationItem key={`${item}${i}`}>
            {item !== ELLIPSIS
              ? (
                  <PaginationLink
                    isActive={isActive(item)}
                    href={getPageHref(item)}
                  >
                    {item}
                  </PaginationLink>
                )
              : (
                  <PaginationEllipsis href="#" />
                )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            disabled={isLastPage}
            href={getPageHref(Math.min(page! + 1, total!))}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLast
            disabled={isLastPage}
            href={getPageHref(total!)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
