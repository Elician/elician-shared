import s from './ContextMenu.module.css'
import { DownArrow } from '../../icons'
import { ActiveLink } from '../ActiveLink'
import { clsx } from 'clsx'
import { MouseEventHandler, ReactNode } from 'react'

interface ContextMenuProps {
  toBack?: string
  className?: string
  points: {
    path?: string
    name: string | ReactNode
    end?: boolean
    disable?: boolean
    active?: boolean
    className?: string
    onClick?: MouseEventHandler<HTMLLinkElement> & MouseEventHandler<HTMLAnchorElement>,
    event?: MouseEventHandler<HTMLParagraphElement> & MouseEventHandler<HTMLAnchorElement>
  }[],
}

export const ContextMenu = ({ toBack, points, className }: ContextMenuProps) => {
  return (
    <nav className={clsx(s.menu, className)}>

      {toBack && (
        <ActiveLink
          end={true}
          href={toBack}
          className={s.back}
        >
          <DownArrow /> Назад
        </ActiveLink>
      )}

      {points.map(point => !point.disable && (
        point.event ? (
          <p
            onClick={point.event} className={clsx(point.active && s.active, point.className)} key={point.path}
          >{point.name}</p>
        ) : (
          <ActiveLink
            onClick={point.onClick}
            key={point.path}
            className={point.className}
            activeClassName={s.active}
            end={point.end}
            href={point.path ?? '/'}
          >
            {point.name}
          </ActiveLink>
        )
      ))}
    </nav>
  )
}
