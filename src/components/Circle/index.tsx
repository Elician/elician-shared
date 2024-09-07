import s from './Circle.module.css'

interface CircleProps {
  text: string,
  color: string,
  percent: number,
  size?: number,
  circSize?: number,
  width?: number,
  circRadius?: number,
  strokeOffset?: number,
  fontSize?: number
}

export const Circle = ({
  text,
  color,
  percent,
  size = 47,
  circSize = 23,
  width = 6,
  circRadius = 20,
  strokeOffset = 126,
  fontSize = 14
}: CircleProps) => {

  let size_style = { width: size + 'px', height: size + 'px' }

  return (
    <div className={s.circle} style={size_style}>
      <p
        style={{
          color: color ?? '#33C767',
          fontSize: fontSize + 'px'
        }}
      >{text}</p>
      <svg className={s.svg} style={size_style}>
        <circle
          className={s.bg}
          cx={circSize}
          cy={circSize}
          r={circRadius}
          style={{
            strokeWidth: width + 'px'
          }}
        />
        <circle
          style={{
            strokeDashoffset: strokeOffset - (strokeOffset * percent / 100),
            stroke: color ?? '#33C767',
            strokeDasharray: strokeOffset,
            strokeWidth: width + 'px'
          }}
          className={s.progress}
          cx={circSize}
          cy={circSize}
          r={circRadius}
        />
      </svg>
    </div>
  )
}