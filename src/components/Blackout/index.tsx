import { animated } from 'react-spring'
import s from './Blackout.module.css'
import { MouseEventHandler } from 'react'

interface BlackoutProps {
  style?: any,
  title?: string,
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const Blackout = ({ onClick, style, title = 'Нажмите, чтобы закрыть окно' }: BlackoutProps) => {
  return (
    <animated.div
      title={title}
      style={style}
      onClick={onClick}
      className={s.blackout}
    />
  )
}