import { useEffect, useState } from 'react'

export const useTimer = (initial: number, then?: (t: number) => boolean, that?: () => void) => {

  const [ timer, setTimer ] = useState<number>(initial)

  useEffect(() => {

    if (then?.(timer)) that?.()

    let interval = setTimeout(() => {
      setTimer(timer - 1)
    }, 1000)

    return () => clearTimeout(interval)
  }, [ timer ])

  return {
    timer: timer,
    reset: () => setTimer(initial)
  }
}
