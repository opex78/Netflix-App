import { configureStore } from "@reduxjs/toolkit";
import gptSlice from "./gptSlice";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

const appStore = configureStore({
    reducer: {
        user: userSlice,
        movies: movieSlice,
        gpt: gptSlice
    }
})

export default appStore;