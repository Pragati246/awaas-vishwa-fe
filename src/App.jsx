import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
// import CreatedAd from './pages/CreatedAd'
// import EditAd from './pages/EditAd'
// import WishList from './pages/WishList'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import NotFound404 from './pages/NotFound404'
import RegisterPage from './pages/RegisterPage'
import MainLayout from './layouts/MainLayout'

function App() {


  return (
    <Routes>
      <Route path = '/' element={<MainLayout/>}> 
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='*' element={<NotFound404/>}/>
      </Route>
    </Routes>
  )
}

export default App
