import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type BasketState = {
    amount: number,
    products: {
    }
}

const initialState: BasketState = {
    amount: 0,
    products: {
    },
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct(state,action: PayloadAction<{
            id: number
        }>) {
            state.amount++
            const id = action.payload.id
            if(state.products[id]){
                state.products[id]++
            }else {
                state.products[id] = 1
            }
        },
        removeProduct(state,action) {
            state.amount--
            const id = action.payload.id
            if(state.products[id] === 1) {
                delete state.products[id]
            }else {
                state.products[id]--
            }
        }
    }
})

export const { addProduct, removeProduct} = basketSlice.actions

export default basketSlice.reducer