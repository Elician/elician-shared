'use client'

import { animated, useTransition } from 'react-spring'
import { ReactNode } from 'react'

type AnimatedDivProps = {
  children: ReactNode,
  className?: string,
  delay?: number
}

export const AnimatedDiv = ({ children, className, delay = 0 }: AnimatedDivProps) => {

  const transitions = useTransition(true, {
    from: { opacity: 0, transform: 'translateX(-13px)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(-13px)', display: 'none' },
    delay: delay
  })

  return transitions((styles, item) => item && (
    <animated.div
      className={className}
      style={styles}
    >
      {children}
    </animated.div>
  ))
}