import React, { Component } from 'react'
import Navigation from '../components/Navigation/Navigation'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import './App.css'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'

const app = new Clarifai.App({
  apiKey: '78440aba0cc6408c9dcaa2eca78e9d9d'
})

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      image: '',
      patternText: '',
    }
  }

  onInputChange = (e) => {
    const imageLink = e.target.value
    this.setState({image: imageLink})
  }

  onButtonSubmit = () => {
    let patternName
    let patternProbability
    app.models.predict(Clarifai.TEXTURES_AND_PATTERNS, this.state.image).then(
      function (response) {
        patternName = response.outputs[0].data.concepts[0].name 
        patternProbability = Math.round(+response.outputs[0].data.concepts[0].value * 100)
      },
      function (err) {
        console.log(err)        
      }
      )
      setTimeout(() => {
        console.log(`${patternProbability}%`)
        const patternText = `I am ${patternProbability}% sure that image is: ${patternName}`
        this.setState({ patternText: patternText})
      }, 1000)
  }

  render () {
    return (
        <div className='App'>
          <Particles className='particles'
            params={particlesOptions} />
          <Navigation link='Sign Out' route='/' />
          <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit= {this.onButtonSubmit} />
          <FaceRecognition image={this.state.image} patternText={this.state.patternText} />
        </div>
    )
  }
}

export default App
