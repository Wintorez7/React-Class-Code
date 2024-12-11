import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        value: 0, // Assuming you want to keep track of a `value` property
    },
    reducers: {
        add: (state, action) => {
            // Update `value` immutably
            state.value += action.payload;
        },
        addUser: (state, action) => {
            // Add a new user to the `users` array immutably
            state.users.push(action.payload);
        },
    },
});

export default userSlice.reducer;
export const { add, addUser } = userSlice.actions;
