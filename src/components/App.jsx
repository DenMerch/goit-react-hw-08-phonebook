import { Routes, Route } from 'react-router-dom'

import { Layout } from './Layout/Layout';
import { Suspense, useEffect } from 'react';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { ContactForm } from './Forms/FormsFone';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { Header } from './Header/Header';
import { useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/operation';
import { HomePage } from 'pages/HomePage';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  return (
    <div
      style={{
        flexDirection: "column",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route
            path='/login'
            element={
              <Suspense>
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path='/signUp'
            element={
              <Suspense>
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              </Suspense>
            }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute>
                <ContactForm />
                <Filter />
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  )
}


