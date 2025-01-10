import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false
    },
    reducers: {
        toggleGPTSearchView: (state) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults
        }
    }
})

export const { toggleGPTSearchView, addGptMovieResult } = gptSlice.actions
export default gptSlice.reducer