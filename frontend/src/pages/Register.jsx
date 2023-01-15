import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import api from '../http'
import { useState } from 'react'
import Alert from '../components/Alert'
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')


  async function register(e) {
    e.preventDefault()
    try {
      const res = await api.post('/register', {
        username,
        password
      })
      navigate('/login');
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
        <p className='description'>Please register yourself and let's start our journey.</p>

        <form className='form' onSubmit={register}>
          {err && <Alert message={err} />}
          <input placeholder='Username' onChange={(e) => setUsername(e.target.value)} required />
          <input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} required />
          <button>Register</button>
          <div className='forgot_password'>
            <Link to='/login'>Have an account?</Link>
          </div>
        </form>

      </div>

      <Footer />
    </>
  )
}

export default Register