import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = (props) => {
  const { image, patternText } = props
  return (
    <div className='pattern-holder'>
      <img src={image} alt={''} />
      <h3>{patternText}</h3>
    </div>
  )
}

export default FaceRecognition
