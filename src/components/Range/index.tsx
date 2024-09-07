import s from './Range.module.css'

interface RangeProps {
  step?: number
  min?: number
  max?: number
  placeholder?: string
  value?: any
  onChange?: (v: any) => void
}

export const Range = ({ step, min, max, value, onChange, placeholder }: RangeProps) => {
  return (
    <div className={s.overlay}>
      <h3>{placeholder}</h3>
      <input
        className={s.input}
        type="range"
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <p>{value + ' из ' + max}</p>
    </div>
  )
}