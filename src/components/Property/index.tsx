import s from './Property.module.css'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface PropertyProps {
  title?: string | ReactNode
  value?: string | ReactNode
  className?: string
  condition?: boolean
}

export const Property = ({ title, value, className, condition = true }: PropertyProps) => {
  return (
    condition ? <dl className={clsx(s.dlWrapper, className)}>
      <dt className={s.name}><span>{title}</span></dt>
      <dd className={s.value}>{value}</dd>
    </dl> : null
  )
}
