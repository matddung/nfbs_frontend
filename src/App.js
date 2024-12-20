import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { getCurrentUser } from './util/UserApiUtils'
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constant/index'
import Home from './Home'
import Header from './Header'
import LoadingIndicator from './LoadingIndicator'
import PrivateRoute from './PrivateRoute'
import Profile from './Profile'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ArticleCreate from './ArticleCreate'
import { ArticleList } from './ArticleList'

function App () {
  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const loadCurrentlyLoggedInUser = () => {
    getCurrentUser()
      .then(response => {
        setCurrentUser(response)
        setAuthenticated(true)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  const updateCurrentUser = newUser => {
    setCurrentUser(newUser)
  }

  useEffect(() => {
    loadCurrentlyLoggedInUser()
  }, [])

  if (loading) {
    return <LoadingIndicator />
  }

  const handleLoginSuccess = () => {
    loadCurrentlyLoggedInUser()
    toast.success('로그인에 성공하였습니다.')
  }

  const handleLoginFailure = error => {
    toast.error(
      <div>
        로그인에 실패하였습니다.
        <br />
        이메일 또는 비밀번호를 확인해주세요.{' '}
      </div>
    )
  }

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem(REFRESH_TOKEN)
    setAuthenticated(false)
    setCurrentUser(null)
    setLoading(false)

    navigate('/', { state: { fromLogout: true } })
  }

  return (
    <div className='App'>
      <Header
        authenticated={authenticated}
        onLogout={handleLogout}
        currentUser={currentUser}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/profile'
          element={
            <PrivateRoute authenticated={authenticated}>
              <Profile
                currentUser={currentUser}
                updateCurrentUser={updateCurrentUser}
                onLogout={handleLogout}
              />
            </PrivateRoute>
          }
        />
        <Route
          path='/signIn'
          element={
            <SignIn
              authenticated={authenticated}
              onLoginSuccess={handleLoginSuccess}
              onLoginFailure={handleLoginFailure}
            />
          }
        />
        <Route
          path='/signUp'
          element={<SignUp authenticated={authenticated} />}
        />
        <Route 
          path='/article/create'
          element={<ArticleCreate authenticated={authenticated} />}
        />
        <Route 
          path='/article/list'
          element={<ArticleList />}
        />
      </Routes>
      <ToastContainer limit={3} autoClose={2000} position='top-right' />
    </div>
  )
}

export default App
