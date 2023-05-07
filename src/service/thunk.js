import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUser, logIn } from 'redux/auth/operation'
export const loginThunk = createAsyncThunk(
    '/users/login',
    async (body, { dispatch }) => {
        const data = await logIn(body)
        dispatch(getProfileThunk())
        return data
    }
)

export const getProfileThunk = createAsyncThunk(
    '/users/current',
    async (_, thunk) => {
        return await getUser()
    }
)