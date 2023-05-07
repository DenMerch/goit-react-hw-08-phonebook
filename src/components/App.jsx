import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout/Layout';
import { Suspense } from 'react';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { ContactForm } from './Forms/FormsFone';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { HomePage } from 'pages/HomePage';

export const App = () => {


  return (
    <div
      style={{
        marginTop: 20,
        marginLeft: "auto",
        marginRight: 'auto',
        fontSize: 20,
        color: '#010101',
        maxWidth: 1200,
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


