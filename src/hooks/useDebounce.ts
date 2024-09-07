import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay: number): [ T, boolean, () => void ] => {

  const [ debouncedValue, setDebouncedValue ] = useState({
    value: value,
    isWait: false,
    clear: () => undefined
  })

  useEffect(
    () => {
      setDebouncedValue({
        ...debouncedValue,
        isWait: true
      })
      const handler = setTimeout(() => {
        setDebouncedValue({
          ...debouncedValue,
          value: value,
          isWait: false
        })
      }, delay)

      debouncedValue.clear = () => {
        setDebouncedValue({
          ...debouncedValue,
          isWait: false
        })
        clearTimeout(handler)
      }
      return () => {
        setDebouncedValue({
          ...debouncedValue,
          isWait: false
        })
        clearTimeout(handler)
      }
    },
    [ value, delay ]
  )

  return [ debouncedValue.value, debouncedValue.isWait, debouncedValue.clear ]
}
