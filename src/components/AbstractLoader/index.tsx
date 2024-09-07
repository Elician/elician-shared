'use client'

import { animated, useTransition } from 'react-spring'
import s from './AbstractLoader.module.css'
import { LogoIllumination } from '../LogoIllumination'

export const AbstractLoader = ({ pending }: { pending: boolean }) => {

  const transitions = useTransition(pending, {
    from: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(2.5)', pointerEvents: 'none' },
    delay: 50
  })

  return transitions(
    (styles, item) => item && (
      <animated.div className={s.overlay} style={styles}>
        <LogoIllumination />
      </animated.div>
    )
  )
}
