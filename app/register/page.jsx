'use client'

import {useState} from 'react'
import {useUser} from '../../context/UserContext'

export default function Register() {
  const {setUser} = useUser()
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit() {
    const res = await fetch('/api/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })

    const data = await res.json()
    console.log(data)

    if (data.success) {
      localStorage.setItem('token', data.token)
      
      setUser({
        username: data.user.username,
        email: data.user.email,
        id: data.user._id
      })
    } else {
      alert(data.message || 'Something went wrong')
    }
  }

  return (
    <main className="flex items-center justify-center">
      <div className="flex flex-col gap-5 w-[300px] mx-auto">
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="flex gap-2 items-center border border-gray-700 px-4 py-2 rounded-full"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="flex gap-2 items-center border border-gray-700 px-4 py-2 rounded-full"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="flex gap-2 items-center border border-gray-700 px-4 py-2 rounded-full"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-sky-400 transition px-7 py-3 rounded-full font-semibold"
        >
          Register
        </button>
      </div>
    </main>
  )
}
