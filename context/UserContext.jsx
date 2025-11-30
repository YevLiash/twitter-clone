'use client'

import {createContext, useContext, useEffect, useState} from 'react'

const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/me', {
          method: 'GET',
          credentials: 'include'
        })
        const data = await res.json()
        setUser(data.user || null)
      } catch (err) {
        console.error('Error fetching user:', err)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  const logout = async () => {
    try {
      await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include'
      })
      setUser(null)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <UserContext.Provider value={{user, setUser, loading, logout}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
