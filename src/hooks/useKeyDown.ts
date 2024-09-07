import { useEffect } from 'react'

export const useKeyDown = (keyCode: string, fn: () => void) => {

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === keyCode) fn()
    return true
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [ fn ])
}
