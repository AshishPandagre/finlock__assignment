import React from 'react'
import Welcome from '../components/Welcome'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import api from '../http'


const Home = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  async function getData() {
    try {
      const token = localStorage.getItem('token')
      const res = await api.get('/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      setUsername(res.data.username)
    } catch (e) {
      localStorage.clear()
      navigate('/login')
    }
  }

  function logout() {
    localStorage.clear()
    navigate('/login')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) navigate('/login')
    getData()
  })

  return (
    <>
      <div className='center'>

        <Welcome name={username} />

        <button style={{ "width": "80px", "marginTop": "20px" }} onClick={logout}>Logout</button>

      </div>

      <Footer />
    </>
  )
}

export default Home
