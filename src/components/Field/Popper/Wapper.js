import React from 'react'
import clsx from 'clsx'
import style from './wapper.module.scss'

const Wapper = ({children ,className}) => {
  return (
    <div className={clsx(style.wapper , className)}>
      {children}
    </div>
  )
}

export default Wapper
