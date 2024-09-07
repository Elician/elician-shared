import s from './PaginationSquare.module.css'
import { MouseEventHandler } from 'react'
import { clsx } from 'clsx'

interface PaginationSquareProps {
  disabled?: boolean
  isActive?: boolean
  number?: number
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const PaginationSquare = ({ number, isActive, onClick, disabled }: PaginationSquareProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        disabled && s.disabled,
        !disabled && [ s.overlay, isActive && s.active ]
      )}
    >
      <p>{disabled ? '...' : number}</p>
    </div>
  )
}