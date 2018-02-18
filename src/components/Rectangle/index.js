import React from 'react'
import styles from './index.css'

function Rectangle (props) {
  const { geometry } = props.annotation
  if (!geometry) return null

  return (
    <div
      className={`${styles.container} ${props.className}`}
      style={{
        position: 'absolute',
        left: `${geometry.x}%`,
        top: `${geometry.y}%`,
        height: `${geometry.height}%`,
        width: `${geometry.width}%`,
        boxShadow: props.active && '0 0 1px 1px yellow inset',
        ...props.style
      }}
    />
  )
}

Rectangle.defaultProps = {
  className: '',
  style: {}
}

export default Rectangle