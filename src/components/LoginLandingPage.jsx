import React from 'react'
import loginImage from '../assets/login-image.jpg'
import TextField from '@material-ui/core/TextField'

const LoginLandingPage = () => {
  return (
    <div className='login-page'>
      <img src={loginImage} className='login-image' />
      <div className='login-container'>
        <h1>Sign in</h1>
        <form className='form-container'>
          <TextField label='Email' variant='outlined' data-cy='email-field' />
          <TextField
            label='Password'
            variant='outlined'
            data-cy='password-field'
          />
        </form>
      </div>
    </div>
  )
}

export default LoginLandingPage
