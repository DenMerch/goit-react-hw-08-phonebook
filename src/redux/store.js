import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { reducer } from './reducer'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [
            FLUSH,
            REHYDRATE,
            PAUSE,
            PERSIST,
            PURGE,
            REGISTER,
        ],
    },
})]
const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware,

})

export const persistor = persistStore(store)
