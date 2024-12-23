import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null
    },
    reducers: {
        addPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideos:(state, action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const { addPlayingMovies, addTrailerVideos } = movieSlice.actions;
export default movieSlice.reducer;