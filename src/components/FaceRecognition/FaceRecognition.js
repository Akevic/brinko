import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = (props) => {
  const { image, patternText } = props
  return (
    <div className='pattern-holder'>
      <div>
        <img src={image} alt={''} />
      </div>
      <div>
        <h3>{patternText}</h3>
      </div>
    </div>
  )
}

export default FaceRecognition
