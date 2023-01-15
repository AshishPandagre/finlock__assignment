import React from 'react'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import { useState } from 'react'
import api from '../http'
import Alert from '../components/Alert'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')

  async function login(e) {
    e.preventDefault()
    try {
      const res = await api.post('/login', {
        username,
        password
      })
      localStorage.setItem('token', res.data.token)
      navigate('/');
    } catch (e) {
      setErr(e.response.data.message)
    }
  }

  useEffect(() => {
    if (localStorage.getItem('token')) navigate('/')
  }, [])

  return (
    <>
      <div className='center'>

        <Welcome />

        <p className='description'>Let's connect to your workspace.</p>
        <p className='description'>Please enter your credentials to continue.</p>

        <form className='form' onSubmit={login}>
          {err && <Alert message={err} />}
          <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
          <input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} required />
          <div className='forgot_password'>
            <a>Forgot Password?</a>
          </div>
          <button>Sign In</button>
        </form>

      </div>

      <Footer />
    </>
  )
}

export default Login
