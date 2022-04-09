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

  // componentDidMount() {
  //   fetch('https://melodious-marshmallow-2ae870.netlify.app:3000')
  //     .then(response => response.json())
  //     .then(console.log)
  // }

  onInputChange = (e) => {
    const imageLink = e.target.value
    this.setState({image: imageLink})
  }

  onButtonSubmit = () => {
    let patternName
    let patternProbability
    app.models.predict(Clarifai.GENERAL_MODEL, this.state.image).then(
      function (response) {
        console.log(response)
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
