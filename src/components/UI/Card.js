import React from 'react'
import useScreenSize from '../features/useScreenSize'

const Card = ({children, classname}) => {
  const screenSize = useScreenSize()

  return (
    <div className={`${screenSize.width < 1024? 'w-[90%]' : 'w-2/3'} flex h-32  mx-3 rounded shadow ${classname}`}>{children}</div>
  )
}

export default Card