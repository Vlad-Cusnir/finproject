import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem('user')

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}
import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem('user')

  return isAuthenticated ? children : <Navigate to="/login" replace />
}
