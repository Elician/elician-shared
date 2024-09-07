'use client'

import { ChangeEventHandler, CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'

import s from './Input.module.css'
import { clsx } from 'clsx'
import { CloseEye, Eye, Info } from '../../icons'
import { Prefix } from '../Prefix'
import { Tip } from '../Tip'

interface InputProps {
  children?: ReactNode
  type?: 'password' | 'text' | 'number'
  placeholder?: string
  name?: string
  style?: CSSProperties
  value?: string | number
  min?: number
  max?: number
  step?: number
  className?: string
  classNameOverlay?: string
  classNameWrapper?: string
  tooltip?: string | ReactNode
  prefix?: string
  annotation?: string
  error?: boolean | string
  disabled?: boolean
  autoComplete?: string
  spellCheck?: boolean
  focusOnMount?: boolean
  disablePadding?: boolean
  disablePasswordView?: boolean
  defaultViewState?: boolean
  subContent?: ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input = (
  {
    style,
    disablePadding,
    type = 'text',
    placeholder,
    name,
    value,
    onChange,
    error,
    disabled,
    autoComplete,
    subContent,
    className,
    tooltip,
    classNameOverlay,
    classNameWrapper,
    disablePasswordView,
    focusOnMount,
    prefix,
    annotation,
    defaultViewState = false,
    spellCheck = true,
    min,
    max,
    step
  }: InputProps) => {

  const [ viewPass, setViewPass ] = useState(defaultViewState)

  const inputEl = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (focusOnMount && !disabled) inputEl?.current?.focus()
  }, [ focusOnMount, disabled ])

  return (
    <div
      className={clsx(s.overlay, classNameOverlay, disabled && s.disabled)}
      style={{ marginBottom: !disablePadding ? '20px' : '0' }}
    >
      {prefix && <Prefix>{prefix}</Prefix>}
      <div className={clsx(s.wrapper, error && s.error, classNameWrapper)}>
        <label>
          <input
            style={style}
            className={clsx(s.input, className)}
            type={viewPass && type === 'password' ? 'text' : type}
            value={value ?? ''}
            disabled={disabled}
            ref={inputEl}
            name={name}
            min={min}
            max={max}
            step={step}
            onChange={onChange}
            spellCheck={spellCheck}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
          {type === 'password' && !disablePasswordView && (
            <div
              title={viewPass ? 'Скрыть пароль' : 'Показать пароль'}
              className={s.view}
              onClick={() => value && setViewPass(!viewPass)}
            >
              {viewPass ? <CloseEye /> : <Eye />}
            </div>
          )}
          {subContent && <div className={s.wrapperContent}>{subContent}</div>}
        </label>
      </div>
      {error || tooltip && <div className={clsx(s.tooltip, error && s.error)}>{error ? error : (
        <>
          {tooltip}

          {annotation && <Tip
            content={annotation}
            config={{ placement: 'top' }}
          >
            {ref => <div ref={ref} className={s.annotationIcon}><Info /></div>}
          </Tip>}
        </>
      )}</div>}
    </div>
  )
}
