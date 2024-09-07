'use client'

import s from './Preloader.module.css'

export const Preloader = () => {
  return (
    <div className={s.overlay}>
      <div className={s.wrapper}>
        <div className={s.indicator} />
      </div>
    </div>
  )
}