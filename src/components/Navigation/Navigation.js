import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'
import Logo from '../Logo/Logo'

const Navigation = (props) => {
  const { link, route } = props
  return (
    <nav className='navbar'>
      <Logo />
      <Link to={route} className='f3 link dim black underline pa3 pointer'>{ link }</Link>
    </nav>
  )
}

export default Navigation
