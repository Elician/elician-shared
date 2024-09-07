import s from './TextArea.module.css'
import { ChangeEventHandler, ReactNode } from 'react'
import { clsx } from 'clsx'
import { Tip } from '../Tip'
import { Info } from '../../icons'

interface TextAreaProps {
  disabled?: boolean;
  spellCheck?: boolean;
  placeholder?: string;
  className?: string;
  tooltip?: string | ReactNode;
  overlayClassName?: string;
  error?: boolean | string;
  name?: string;
  annotation?: string;
  minHeight?: number;
  maxHeight?: number;
  value?: any;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export const TextArea = ({
  disabled,
  placeholder,
  minHeight,
  value,
  onChange,
  name,
  error,
  maxHeight,
  className,
  overlayClassName,
  spellCheck,
  annotation,
  tooltip
}: TextAreaProps) => {

  return (
    <div className={clsx(s.wrapper, disabled && s.disabled)}>
      <div className={clsx(s.overlay, overlayClassName)}>
      <textarea
        disabled={disabled}
        style={{ minHeight: minHeight + 'px', maxHeight: maxHeight + 'px' }}
        className={clsx(s.area, className)}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        spellCheck={spellCheck}
      />
        {error && <p className={s.error}>{error}</p>}
      </div>
      {tooltip && <div className={s.tooltip}>
        {tooltip}

        {annotation && <Tip
          content={annotation}
          config={{ placement: 'top' }}
        >
          {ref => <div ref={ref} className={s.annotationIcon}><Info /></div>}
        </Tip>}
      </div>}
    </div>)
}
