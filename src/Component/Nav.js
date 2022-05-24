import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <Link to='/'> HOME </Link>
      <Link to='/portfolio'> Portfolio </Link>
      <Link to='/team'> Team </Link>
      <Link to='/about'> About </Link>
      <Link to='/contact'> Contact </Link>
    </div>
  )
}

export default Nav