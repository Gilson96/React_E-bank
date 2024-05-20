import React from 'react'

const Card = ({children, classname}) => {
  return (
    <div className={`flex h-32 w-2/3 mx-3 bg-red-500 rounded shadow ${classname}`}>{children}</div>
  )
}

export default Card