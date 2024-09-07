import s from './Prefix.module.css'
import { ReactNode } from 'react'

export const Prefix = ({ children }: { children: ReactNode }) => {
  return <p className={s.prefix}>{children}</p>
}