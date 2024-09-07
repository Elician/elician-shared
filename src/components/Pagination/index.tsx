import { PaginationSquare } from '../PaginationSquare'

import s from './Pagination.module.css'
import { clsx } from 'clsx'

interface PaginationProps {
  className?: string,
  countPages: number,
  page: number,
  action: (v: number) => void
}

export const Pagination = ({ page, countPages, action, className }: PaginationProps) => {

  if (countPages === 1) return null

  return (
    <div className={clsx(s.overlay, className)}>
      <PaginationSquare
        onClick={() => action(1)}
        isActive={page === 1}
        number={1}
      />

      {page < 6 ? (
        <>
          {[ ...Array(countPages - 1) ].map((_, idx) => idx < 5 ? (
            <PaginationSquare
              onClick={() => action(idx + 2)}
              isActive={page === idx + 2}
              number={idx + 2}
              key={idx + 2}
            />
          ) : null)}
          <PaginationSquare disabled />
        </>
      ) : page > 5 && page <= countPages - 5 ? (
        <>
          <PaginationSquare disabled />
          <PaginationSquare
            onClick={() => action(page - 2)}
            isActive={page === page - 2}
            number={page - 2}
          />
          <PaginationSquare
            onClick={() => action(page - 1)}
            isActive={page === page - 1}
            number={page - 1}
          />
          <PaginationSquare
            onClick={() => action(page)}
            isActive={true}
            number={page}
          />
          <PaginationSquare
            onClick={() => action(page + 1)}
            isActive={page === page + 1}
            number={page + 1}
          />
          <PaginationSquare
            onClick={() => action(page + 2)}
            isActive={page === page + 2}
            number={page + 2}
          />
          <PaginationSquare disabled />
        </>
      ) : page > countPages - 5 ? (
        <>
          <PaginationSquare disabled />
          <PaginationSquare
            onClick={() => action(countPages - 5)}
            isActive={page === countPages - 5}
            number={countPages - 5}
          />
          <PaginationSquare
            onClick={() => action(countPages - 4)}
            isActive={page === countPages - 4}
            number={countPages - 4}
          />
          <PaginationSquare
            onClick={() => action(countPages - 3)}
            isActive={page === countPages - 3}
            number={countPages - 3}
          />
          <PaginationSquare
            onClick={() => action(countPages - 2)}
            isActive={page === countPages - 2}
            number={countPages - 2}
          />
          <PaginationSquare
            onClick={() => action(countPages - 1)}
            isActive={page === countPages - 1}
            number={countPages - 1}
          />
        </>
      ) : null}

      <PaginationSquare
        onClick={() => action(countPages)}
        isActive={page === countPages}
        number={countPages}
      />
    </div>
  )
}