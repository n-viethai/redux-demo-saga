import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const { reducer: userReducer, actions: userActions } = createSlice({
    initialState,
    name: 'organization',
    reducers: {
        login: (state, action) => {},
    },
})
