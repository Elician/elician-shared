'use client'

import { ReactNode, useEffect, useState } from 'react'

import s from './ParallaxTop.module.css'

export const ParallaxTop = ({ children, image, height }: {
  children?: ReactNode,
  image: string,
  height?: string
}) => {

  const [ scroll, setScroll ] = useState(0)

  const handleScroll = () => setScroll(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={s.wrapperHeader}>
      <div
        className={s.background} style={{
        backgroundImage: 'url(' + image + ')',
        transform: 'translate3d(0px, ' + scroll / 2 + 'px, 0px)'
      }}
      />
      <div className={s.line} />
      <header className={s.header} style={{ height: height ?? '400px' }}>
        <div className={s.wrapper} style={{ transform: 'translate3d(0px, ' + scroll / 4 + 'px, 0px)' }}>
          {children}
        </div>
      </header>
    </div>
  )
}