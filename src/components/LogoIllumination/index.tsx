import s from './LogoIllumination.module.css'
import { Logo } from '../../icons'

export const LogoIllumination = () => {
  return (
    <div className={s.wrapper}>
      <Logo />
      <Logo />
    </div>
  )
}
