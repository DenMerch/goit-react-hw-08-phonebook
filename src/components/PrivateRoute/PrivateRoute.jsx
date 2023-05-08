import { useSelector } from 'react-redux'
import { Navigate, } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isAuth = useSelector((state) => state.auth.token)
    const isRefreshing = state => state.auth.isRefreshing;
    const shouldRedirect = !isAuth && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
