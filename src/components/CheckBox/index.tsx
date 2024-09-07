'use client'

import s from './CheckBox.module.css'
import { ChangeEventHandler, CSSProperties, useState } from 'react'
import { nanoid } from 'nanoid'
import { clsx } from 'clsx'
import { Tip } from '../Tip'
import { Info } from '../../icons'

interface CheckBox {
  disabled?: boolean;
  disablePadding?: boolean;
  className?: string;
  name?: string;
  annotation?: string;
  placeholder?: string;
  value?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  style?: CSSProperties;
}

export const CheckBox = ({
  disabled,
  value,
  onChange,
  name,
  annotation,
  placeholder,
  disablePadding,
  className,
  style
}: CheckBox) => {

  const [ uuid ] = useState(nanoid())

  return (
    <div style={style} className={clsx(className, s.overlay, disabled && s.disabled)}>
      <input
        className={s.checkbox}
        id={uuid}
        type="checkbox"
        name={name}
        checked={value}
        onChange={onChange}
      />
      <label style={{ margin: disablePadding ? 0 : '' }} htmlFor={uuid}>
        {placeholder}

        {annotation && <Tip
          content={annotation}
          config={{ placement: 'top' }}
        >
          {ref => <div ref={ref} className={s.annotationIcon}><Info /></div>}
        </Tip>}
      </label>
    </div>
  )
}
