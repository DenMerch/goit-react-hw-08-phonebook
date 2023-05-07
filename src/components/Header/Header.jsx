import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { logOut } from "redux/auth/operation"





export const Header = () => {
    const { isLoggedIn } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())


    }
    return (<div>
        <h2>Phonebook</h2>
        <Link to={'/'} >Home</Link>
        <Link to={'/contacts'} >Contacts</Link>
        <button
            role='link'
            onClick={isLoggedIn ? handleLogOut : handleLogin}
        >
            {isLoggedIn ? 'LogOut' : 'LogIn'}
        </button>
    </div>

    )
}