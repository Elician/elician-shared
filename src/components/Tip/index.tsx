import { usePopperTooltip } from 'react-popper-tooltip'
import { animated, useTransition } from 'react-spring'
import s from './Tip.module.css'
import { clsx } from 'clsx'
import { Dispatch, ReactNode, SetStateAction } from 'react'

interface TipProps {
  config?: any,
  children: (ref: Dispatch<SetStateAction<HTMLElement | null>>) => ReactNode,
  className?: string,
  tooltipClassName?: string,
  content?: ReactNode,
  setAllowClick?: (val: boolean) => void,
}

export const Tip = ({
  config,
  children,
  className,
  tooltipClassName,
  content,
  setAllowClick = () => null
}: TipProps) => {
  const {
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    getArrowProps,
    visible
  } = usePopperTooltip({
    delayHide: 50,
    interactive: true,
    placement: 'top',
    ...config
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
      {children(setTriggerRef)}
      {transitions((style: any, item) => (
        item && (
          <animated.div
            onMouseEnter={() => setAllowClick(false)}
            onMouseLeave={() => setAllowClick(true)}
            ref={setTooltipRef}
            {...getTooltipProps({
              className: clsx(s.wrapper, className),
              style: { ...style }
            })}
          >
            <div className={clsx(s.tooltip, tooltipClassName)}>
              <div style={{ whiteSpace: 'pre-wrap' }}>{content}</div>
              <div {...getArrowProps({})} />
            </div>
          </animated.div>
        )
      ))}
    </>
  )
}