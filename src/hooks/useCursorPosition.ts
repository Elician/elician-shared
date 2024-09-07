import { useEffect, useState } from 'react'

export const useCursorPosition = () => {

  const [ x, setX ] = useState(0)
  const [ y, setY ] = useState(0)

  useEffect(
    () => {
      const update = (e: MouseEvent | TouchEvent) => {
        if ('pageX' in e) {
          setX(e?.pageX)
        }
        if ('pageY' in e) {
          setY(e?.pageY)
        }
      }

      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [ setX, setY ]
  )

  return [ x, y ]
}
