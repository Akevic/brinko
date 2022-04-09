import React, { Component } from 'react'
import Navigation from '../components/Navigation/Navigation'
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm'
import FaceRecognition from '../components/FaceRecognition/FaceRecognition'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import './App.css'
// import { ClarifaiStub, grpc } from 'clarifai-nodejs-grpc'
// const {ClarifaiStub, grpc} = require("clarifai-nodejs-grpc")

const app = new Clarifai.App({
  apiKey: '0416a2bad12d45e39da79d38ea4be083'
})

// const stub = app.grpc

// const metadata = stub.Metadata()
// metadata.set("authorization", "Key YOUR_CLARIFAI_API_KEY")

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

  onButtonSubmit = async () => {
    let patternName
    let patternProbability
    try {
      const res = await app.models.predict({ id: 'fish', version: '416d516bce854c04bc6383d62018aadd' }, this.state.image)

      if (res.outputs.length !== 0) {
        patternName = res.outputs[0].data.concepts[0].name 
        patternProbability = Math.round(+res.outputs[0].data.concepts[0].value * 100)
        console.log(patternName)
        console.log(patternProbability)
        let patternText = `I am ${patternProbability}% sure that image is: ${patternName}`
        this.setState({ patternText: patternText})
      } else {
        console.log(res)
        this.setState({ patternText: 'I am not able to identify this fish at the moment' })
      }
    } catch (err) {
      console.log(err)
    }
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
