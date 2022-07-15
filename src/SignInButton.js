import React from 'react'
import { Link } from 'react-router-dom'
import './SignInButton.css'

function SignInButton() {
  return (
    <Link className='signInButton' to='/account/signin'>Sign In</Link>
  )
}

export default SignInButton