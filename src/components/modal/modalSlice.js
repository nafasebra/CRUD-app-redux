import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    haveHeader: true,
    title: 'modal title',
    children: {},
}

export const modalSlice = createSlice({
    name: 'modalStatus',
    initialState,
    reducers: {
        openModal: (state) => {
            state.value = true
        },
        closeModal: (state) => {
            state.value = false
        }
    }
})