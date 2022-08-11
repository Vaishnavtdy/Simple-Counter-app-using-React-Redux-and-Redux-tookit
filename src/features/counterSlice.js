import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        color: '111',
    },
    reducers: {
        increment: (state) => {
            state.value += 1
            state.color = Math.random().toString(16).substr(-6)
        },
        decrement: (state) => {
            state.value -= 1
            state.color = Math.random().toString(16).substr(-6)
        },
        resetVal: (state) => {
            state.value = 0
            state.color = '111'
        }
    }
})

export const { increment, decrement, resetVal } = counterSlice.actions
export default counterSlice.reducer