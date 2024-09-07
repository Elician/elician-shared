'use client'

import s from './CopyArea.module.css'
import { Copy } from '../../icons'
import { ReactNode, useEffect, useState } from 'react'
import { clsx } from 'clsx'

interface CopyArea {
  title?: string
  className?: string
  value?: string
  loading?: boolean
  hidden?: boolean
  icons?: ReactNode
}

export const CopyArea = ({ title, value, className, icons, loading = false, hidden = false }: CopyArea) => {

  const [ success, setSuccess ] = useState(false)

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false)
      }, 1500)
    }
  }, [ success ])

  return (
    <div className={s.codeInp + ' ' + className}>
      {loading ? <div className={s.blackout} /> : null}
      <div className={clsx(s.content, success && s.success)}>
        <p className={s.name}>{success ? 'Скопировано в буфер' : title}</p>
        <p className={s.descInp}>{hidden && !success ? [ ...Array(30) ].map(_ => '*').join('') : value}</p>
      </div>
      <div className={s.icons}>
        {icons}
        <div
          onClick={() => {
            value && navigator.clipboard.writeText(value).then(() => setSuccess(true))
          }}
        >
          <Copy />
        </div>
      </div>
    </div>
  )
}
