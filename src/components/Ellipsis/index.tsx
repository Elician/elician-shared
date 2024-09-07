'use client'

import s from './Ellipsis.module.css'
import { usePopperTooltip } from 'react-popper-tooltip'
import { useTransition, animated } from 'react-spring'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

interface EllipsisProps {
  className?: string
  children: ReactNode
}

export const Ellipsis = ({ className, children }: EllipsisProps) => {

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible
  } = usePopperTooltip({
    delayHide: 50,
    interactive: true,
    placement: 'bottom'
  })

  const transitions = useTransition(visible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 100
    }
  })

  return (
    <>
      <div ref={setTriggerRef} className={clsx(s.wrapper, className)} />

      {transitions((styles: any, item) => item && (
        <animated.div ref={setTooltipRef} {...getTooltipProps({ style: styles })}>
          <div className={s.tooltip}>
            {children}
          </div>
          <div {...getArrowProps({ className: s.arrow })} />
        </animated.div>)
      )}
    </>
  )
}