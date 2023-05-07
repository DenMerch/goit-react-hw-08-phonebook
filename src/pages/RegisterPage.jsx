import { useState } from "react";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { logIn, register } from "redux/auth/operation";


export const RegisterPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            password,
        }
        setName('');
        setEmail('');
        setPassword('');
        console.log("submit");
        dispatch(register(newUser))
    }
    return (
        <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit} autoComplete="off">

                <label htmlFor='registerName' >
                    Name
                </label>
                <input
                    onChange={handleChange}
                    name='name'
                    type='text'
                    id='registerName'
                    value={name}
                />

                <label htmlFor='registerEmail'>
                    Email address
                </label>
                <input
                    onChange={handleChange}
                    name='email'
                    type='email'
                    id='registerEmail'
                    aria-describedby='emailHelp'
                    value={email}
                />

                <label
                    htmlFor='registerPassword'
                >
                    Password
                </label>
                <input
                    onChange={handleChange}
                    name='password'
                    type='password'
                    id='registerPassword'
                    value={password}
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
            <div>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}