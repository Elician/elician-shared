import s from './CopySpan.module.css'
import { useEffect, useState } from 'react'
import { clsx } from 'clsx'
import { Copy } from '../../icons'

type CopySpan = {
  value?: string
  copyValue?: string
}

export const CopySpan = ({ value, copyValue }: CopySpan) => {

  const [ success, setSuccess ] = useState(false)

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false)
      }, 1500)
    }
  }, [ success ])

  const click = () => {
    let copy = value
    if (copyValue) copy = copyValue

    if (!copy) return

    navigator.clipboard.writeText(copy).then(() => setSuccess(true))
  }

  return <span
    title="Нажмите, чтобы скопировать в буфер обмена"
    className={clsx(s.copy, success && s.success)}
    onClick={click}
  >{value} <Copy /></span>
}
