'use client'

import {useState} from 'react'
import Link from 'next/link'
import {useUser} from '../../context/UserContext'
import {useRouter} from 'next/navigation'

export default function Login() {
  const {setUser} = useUser()
  const router = useRouter()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault()

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(form)
    })

    const data = await res.json()
    console.log(data)

    if (data.success) {
      localStorage.setItem('token', data.token)

      setUser({
        username: data.data.username,
        email: data.data.email,
        id: data.data.id
      })

      router.push('/')
    } else {
      alert(data.error || 'Something went wrong')
    }
  }

  return (
    <main className="flex items-center justify-center h-screen px-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 w-[300px] mx-auto"
      >
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-2">Login</h1>

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
          className="text-gray-900 bg-gray-200 hover:bg-gray-300 transition px-7 py-3 rounded-full font-semibold"
        >
          Login
        </button>

        <Link
          href="/register"
          className="mx-auto"
        >
          Don't have an account? <span className="text-blue-400">Sign up.</span>
        </Link>
      </form>
    </main>
  )
}
