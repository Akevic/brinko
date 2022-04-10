import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = (props) => {
  const { image, patternText } = props
  return (
    <div className='pattern-holder'>
      <div className='first'>
        <img className='fish_image' src={image} alt={''} />
      </div>
      <div className='second'>
        <h3>{patternText}</h3>
      </div>
    </div>
  )
}

export default FaceRecognition
