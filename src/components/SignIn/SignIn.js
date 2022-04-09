import React, { Component } from 'react'
import Tilt from 'react-tilt'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  // === SAVE EMAIL ===
  onEmailChange = (e) => {
    this.setState({ signInEmail: e.target.value })
  }

  onPasswordChange = (e) => {
    this.setState({ signInPassword: e.target.value })
  }

  onSubmitSignIn = () => {
    fetch('https://melodious-marshmallow-2ae870.netlify.app/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
  }

  render () {
    return (
      <div className='App'>
        <Navigation link='Register' route='/register' />
        <Tilt className='Tilt br2 center ma4' options={{ max: 55 }} style={{ height: 500, width: 500 }} >
          <div className='Tilt-inner pa3'>
            <main className='pa4 black-80 shadow-2 center'>
              <form className='measure center'>
                <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
                  <legend className='f1 fw6 ph0 mh0 center'>Sign In</legend>
                  <div className='mt3'>
                    <label className='db fw6 lh-copy f6' >Email</label>
                    <input onChange={this.onEmailChange} className='pa2 input-reset ba bg-transparent hover-bg-black  hover-white w-50' type='email' name='email-address' id='email-address' />
                  </div>
                  <div className='mv3'>
                    <label className='db fw6 lh-copy f6' >Password</label>
                    <input onChange={this.onPasswordChange} className='b pa2 input-reset ba bg-transparent hover-bg-black  hover-white w-50' type='password' name='password' id='password' />
                  </div>
                </fieldset>
                <div className='link-holder'>
                  <Link onClick={this.onSubmitSignIn} className='b ph3 pv2 input-reset ba b--black black bg-transparent grow pointer f6 dib' to='home'>Sign In</Link>
                  {/* <input className='b ph3 pv2 input-reset ba b--black bg-transparent grow   pointer f6 dib' type='submit' value='Sign in' /> */}
                </div>
              </form>
            </main>
          </div>
        </Tilt>
      </div>
    )
  }
}

export default SignIn
