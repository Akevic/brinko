import React from 'react'
import Tilt from 'react-tilt'
import fish from './fish.png'

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className='Tilt br2' options={{ max: 55 }} style={{ height: 100, width: 100 }} >
        <div className='Tilt-inner pa3'>
          <img src={fish} alt='logo' />
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
