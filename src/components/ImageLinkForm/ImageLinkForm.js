import React from 'react'
import './imagelinkform.css'

const ImageLinkForm = (props) => {
  const { onInputChange, onButtonSubmit } = props
  return (
    <div>
      <div className='search-wrapper w-40 pa4 br3 shadow-5 center'>
        <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
        <button className='w-30 grow f4 link ph3 dib white center button_detect' onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  )
}

export default ImageLinkForm
