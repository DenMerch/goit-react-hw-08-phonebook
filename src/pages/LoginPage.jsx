import { useState } from "react";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { logIn } from "redux/auth/operation";
import { loginThunk } from "service/thunk";
export const LoginPage = () => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = (e) => {
        if (e.target.name === 'email') setEmail(e.target.value)
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(logIn({
            email,
            password
        }))
        setEmail('')
        setPassword('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='loginEmail'>
                        Email address
                    </label>
                    <input
                        name='email'
                        type='email'
                        id="loginEmail"
                        aria-describedby='emailHelp'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label
                        htmlFor='loginPassword'
                    >
                        Password
                    </label>
                    <input
                        name='password'
                        type='password'
                        onChange={handleChange}
                        id="loginPassword"
                    />
                </div>
                <div>
                    <Link to='/signUp'>Sign Up</Link>
                </div>
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}