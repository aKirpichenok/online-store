import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducers/basketReducer';
import userReducer from './reducers/userReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        basket: basketReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
    // preloadedState: null
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch