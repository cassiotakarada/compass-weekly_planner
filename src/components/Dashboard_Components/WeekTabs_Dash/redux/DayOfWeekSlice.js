import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {weekDay:"monday"}

const DayOfWeekSlice = createSlice ({ 
    name: "deleteAll",
    initialState: initialState,
    reducers: {
        setWeekDay:(state, action) => {
            console.log(action.payload)
            state.weekDay=action.payload
        }
    }
})

export const {setWeekDay} = DayOfWeekSlice.actions

export default DayOfWeekSlice;