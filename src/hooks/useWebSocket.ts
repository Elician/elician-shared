import { useRef } from 'react'

export const useWebSocket = (url: string) => {
  const ref = useRef<WebSocket>(new WebSocket(url))

  return ref.current
}
