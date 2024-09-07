import s from './MiniLoader.module.css'
import { clsx } from 'clsx'

export const MiniLoader = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(s.loader, className)} />
  )
}