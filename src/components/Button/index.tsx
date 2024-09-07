'use client'

import s from './Button.module.css'
import { clsx } from 'clsx'
import Link from 'next/link'
import { MiniLoader } from '../MiniLoader'
import { CSSProperties, MouseEventHandler, ReactNode } from 'react'
import { SafeLink } from '../SafeLink'

interface ButtonsProps {
  disabled?: boolean,
  loading?: boolean,
  secondary?: boolean,
  safe?: boolean,
  errored?: boolean,
  className?: string,
  children?: ReactNode,
  onClick?: (MouseEventHandler<HTMLButtonElement> & MouseEventHandler<HTMLAnchorElement>) | undefined,
  type?: 'button' | 'submit' | 'reset',
  href?: any,
  style?: CSSProperties,
}

export const Button = ({
  safe,
  disabled,
  loading,
  style,
  secondary,
  errored,
  className,
  children,
  onClick,
  type = 'button',
  href
}: ButtonsProps) => {

  const Component = href ? (safe ? SafeLink : Link) : 'button'

  return (
    <Component
      style={style}
      className={clsx(
        className,
        s.button,
        disabled && s.disabled,
        loading && s.loading,
        secondary && s.secondary,
        errored && s.errored
      )}
      title={loading ? 'Идёт загрузка' : undefined}
      onClick={!(disabled || loading) ? onClick : undefined}
      type={type}
      disabled={disabled || loading}
      href={!(disabled || loading) ? href : null}
    >
      {loading ? (
        <div className={s.loaderBlock}>
          <MiniLoader className={s.loader} />
        </div>
      ) : null}

      <span>{children}</span>
    </Component>
  )
}
