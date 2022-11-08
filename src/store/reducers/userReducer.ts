import { createSlice, PayloadAction } from '@reduxjs/toolkit'



type UserState = {
    isLogged: boolean;
    userName: string;
    password: number;
}

const initialState: UserState = {
    isLogged: false,
    userName: '',
    password: null,
}

const userSlice = createSlice ({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{
            isLogged:boolean; 
            username: string
        }>) {
            state.isLogged = action.payload.isLogged
            state.userName = action.payload.username
        },
        logout(state) {
            state.isLogged = false
            state.userName = ''
        },
        register(state, action: PayloadAction<{
            username:string;
            password: number;
            isLogged: boolean;
        }>) {
            state.userName = action.payload.username
            state.password = action.payload.password
            state.isLogged = action.payload.isLogged
        }
    }
})

export const { login, logout, register} = userSlice.actions

export default userSlice.reducer