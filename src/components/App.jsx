import { Routes, Route } from 'react-router-dom'
import { Layout } from './Layout/Layout';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

import { LoginPage } from 'pages/LoginPage';
import { RegisterPage } from 'pages/RegisterPage';
import { HomePage } from 'pages/HomePage';
import { PrivatContacts } from './PrivateContacts/PrivateContacts';

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
              <PublicRoute redirectTo='/contacts' component={<LoginPage />} />
            }
          />
          <Route
            path='/signUp'
            element={
              <PublicRoute redirectTo='/contacts' component={<RegisterPage />} />
            }
          />
          <Route
            path='/contacts'
            element={
              <PrivateRoute redirectTo='/login' component={<PrivatContacts />} />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  )
}


