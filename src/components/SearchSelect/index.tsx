import { useEffect, useState } from 'react'

import s from './SearchSelect.module.css'
import { Close } from '../../icons'
import { clsx } from 'clsx'
import { useDebounce } from '../../hooks/useDebounce'
import { Prefix } from '../Prefix'
import { MiniLoader } from '../MiniLoader'

interface SearchSelectProps {
  disabled?: boolean
  loading?: boolean
  placeholder?: string
  tooltip?: string
  prefix?: string
  options?: any[]
  onChange: (value: any) => void
  onSearch: (value: any) => void
}

export const SearchSelect = ({
  disabled,
  placeholder,
  tooltip,
  prefix,
  onChange,
  onSearch,
  loading = false,
  options = []
}: SearchSelectProps) => {

  const [ isOpen, setIsOpen ] = useState(false)
  const [ search_value, set_search_value ] = useState('')
  const [ result_value, set_result_value ] = useState('')

  const [ debounced ] = useDebounce<any>(search_value, 500)

  useEffect(() => {
    if (debounced) onSearch(debounced)
  }, [ debounced ])

  useEffect(() => {
    if (!search_value) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }, [ search_value ])

  return (
    <div className={clsx(s.wrapper, disabled && s.disabled)}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <div className={s.wrapperContent}>
        {result_value ? (
          <div className={clsx(s.input, s.resulted)}>
            <p>{options.filter((opt: any) => opt.value === result_value)[0].name}</p>
            <div
              onClick={() => {
                setIsOpen(false)
                set_result_value('')
                set_search_value('')
                onChange('')
              }}
              className={s.clear}
            >
              <Close />
            </div>
          </div>
        ) : (
          <input
            placeholder={placeholder}
            className={clsx(s.input, isOpen && s.opened)}
            onChange={e => set_search_value(e.target.value)}
            value={search_value}
          />
        )}

        {isOpen && (
          <div className={s.selectWrapper}>

            {loading ? <MiniLoader /> : (

              <div className={s.select}>

                {options.length < 1 && (
                  <p className={s.nothing}>Ничего не нашлось</p>
                )}

                {options.map((opt: any) => (
                  <div
                    key={opt.value}
                    onClick={() => {
                      setIsOpen(false)
                      onChange(opt.value)
                      set_result_value(opt.value)
                    }}
                    className={s.option}
                  >
                    {opt.name}
                  </div>
                ))}
              </div>

            )}
          </div>
        )}
      </div>
      {tooltip && <p className={s.tooltip}>{tooltip}</p>}
    </div>
  )
}
