import { createSlice } from '@reduxjs/toolkit'
import {UsersData} from "../../FakeData"

const initialState = {
    value: UsersData,
  }

  export const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload)

        },

    },

});

export const {addUser} = usersSlice.actions

export default usersSlice.reducer