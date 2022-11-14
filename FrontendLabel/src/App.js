import React from 'react'
import { Route, Routes, Navigate} from 'react-router-dom';
import Header from './components/Layout/Header';
import Clients from './pages/Clients';
import ContactForm from './pages/ContactForm';
import CreateAccount from './pages/CreateAccount';
import EditClient from './pages/EditClient';
import HomePage from './pages/HomePage';
import Labels from './pages/Labels';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate replace to='/home' />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/labels' element={<Labels />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/clients/:id' element={<EditClient/>} />
        <Route path='/create-account' element={<CreateAccount/>} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Fragment>

  )
}

export default App