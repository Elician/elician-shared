import s from './OnlineCircle.module.css'

interface OnlineCircleProps {
  onlineStatus: {
    type: 'game' | 'online' | 'offline'
  }
}

export const OnlineCircle = ({ onlineStatus }: OnlineCircleProps) => {
  return (
    <div className={s.wrapper}>
      {onlineStatus.type === 'game' && <div className={s.game} />}
      {onlineStatus.type === 'online' && <div className={s.online} />}
      {onlineStatus.type === 'offline' && <div className={s.offline} />}
    </div>
  )
}