import React from 'react'
import { useSelector } from 'react-redux'

function MainContainer() {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies)
    if (!movies) return;
    console.log("movies", movies)
    return (
        <div>MainContainer</div>
    )
}

export default MainContainer