import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name, path, classname}) => {
  return (
    <Link to={path}>
        <button className={classname}>{name}</button>
    </Link>
  )
}

export default Button