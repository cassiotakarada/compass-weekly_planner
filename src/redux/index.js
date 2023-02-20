import { combineReducers, configureStore } from '@reduxjs/toolkit'
import DayOfWeekSlice from '../components/Dashboard_Components/WeekTabs_Dash/redux/DayOfWeekSlice'

    const store = configureStore({
        reducer: DayOfWeekSlice.reducer
    })

export default store;