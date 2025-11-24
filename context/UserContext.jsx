'use client'

import {createContext, useContext, useEffect, useState} from 'react'
import jwt from 'jsonwebtoken'

const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      try {
        const decoded = jwt.decode(token)
        if (decoded.username) {
          setUser({
            id: decoded.id,
            username: decoded.username,
            email: decoded.email
          })
        }
      } catch (err) {
        console.error('Token decode error:', err)
      }
    }

    setLoading(false)
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <UserContext.Provider value={{user, setUser, loading, logout}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
