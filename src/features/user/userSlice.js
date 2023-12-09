import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    password: localStorage.getItem("password"),
    email: localStorage.getItem("email"),
    name: localStorage.getItem("name"),
    phone: localStorage.getItem("phone"),
    id: localStorage.getItem("id"),
    search: [],
}


const userSlice = createSlice(
    {
        name: 'user',
        initialState,
        reducers: {
            addEmail(state, action) {
                state.email = action.payload;
                localStorage.setItem("email", state.email);
            },
            addPassword(state, action) {
                state.password = action.payload
                localStorage.setItem("password", state.password);
            },
            addName(state, action) {
                state.name = action.payload;
                localStorage.setItem("name", state.name);
            },
            addPhone(state, action) {
                state.phone = action.payload;
                localStorage.setItem("phone", state.phone);
            },
            addID(state, action) {
                state.id = action.payload;
                localStorage.setItem("id", state.id);
            },
            addSearch(state, action) {
                state.search = action.payload;
            },

        }
    }

)


export const { addPassword, addUserName, addName, addPhone, addEmail, addID, addSearch } = userSlice.actions;

export const getName = (state) => {
    return state.user.name;
}

export const getEmail = (state) => {
    return state.user.email;
}
export const getSearch = (state) => {
    return state.user.search;
}



export default userSlice.reducer;