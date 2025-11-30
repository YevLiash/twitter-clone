'use client'

import {useState} from 'react'
import {useUser} from '../../context/UserContext'
import {useRouter} from 'next/navigation'

export default function Register() {
  const {setUser} = useUser()
  const router = useRouter()
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState()

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/
    return regex.test(password)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (!validatePassword(form.password)) {
      setError('Password should have min 6 characters,1 uppercase letter, 1 number, 1 symbol')
      return
    }

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
      router.push('/')
    } else {
      alert(data.message || 'Something went wrong')
    }
  }

  return (
    <main className="flex items-center justify-center h-screen px-6">

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-[300px] mx-auto"
      >
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-2">Sign Up</h1>
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
        <div className="w-full">
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full flex gap-2 items-center border border-gray-700 px-4 py-2 rounded-full"
          />
          <p className="text-xs ml-3 mt-2 min-h-[1rem] text-red-600 ">{error === 'Password should have min 6 characters,1 uppercase letter, 1 number, 1 symbol' ? 'Password should have min 6 characters,1 uppercase letter, 1 number, 1 symbol' : ''} </p>
        </div>
        <div className="w-full">
          <input
            name="confirmPassword"
            type="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full flex gap-2 items-center border border-gray-700 px-4 py-2 rounded-full"
          />

          <p className=" text-xs ml-3 mt-2 min-h-[1rem] text-red-600 ">{error === 'Passwords do not match' ? `Passwords don't match` : ''} </p>

        </div>

        <button
          className="text-gray-900 bg-gray-200 hover:bg-gray-300 transition px-7 py-3 rounded-full font-semibold"
        >
          Sign Up
        </button>
      </form>
    </main>
  )
}
