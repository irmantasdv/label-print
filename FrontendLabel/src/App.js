import React from 'react'
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import Header from './components/Layout/Header';
import ContactForm from './pages/ContactForm';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>

  )
}

export default App