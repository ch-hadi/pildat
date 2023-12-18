import { configureStore } from "@reduxjs/toolkit";
import organizations from "./features/organizationSlice";
export const store = configureStore({
    reducer:{
       organizations
    }
})