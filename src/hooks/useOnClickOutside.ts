import { useEffect } from 'react'

export const useOnClickOutside = <T extends HTMLElement>(refs: React.RefObject<T>[], handler: (e: Event) => void, mouseEvent: string) => {
  useEffect(
    () => {
      const listener = (event: Event) => {

        let flag = true

        refs.map(ref => {
          if (!ref?.current || ref.current?.contains((event?.target as Node) || null)) {
            flag = false
          }
        })

        if (!flag) return

        handler(event)
      }
      document.addEventListener(mouseEvent, listener)
      return () => {
        document.removeEventListener(mouseEvent, listener)
      }
    },
    [ refs, handler, mouseEvent ]
  )
}
