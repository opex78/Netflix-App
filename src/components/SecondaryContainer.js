import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

function SecondaryContainer() {
    const movies = useSelector((store) => store.movies)
    if (!movies.nowPlayingMovies || !movies.popularMovies) return;
    return (
        movies?.nowPlayingMovies && (<>
            <div className='bg-black'>
                <div className='-mt-36 pl-12 relative z-20'>
                    <MovieList title="Now Playing" movies={movies?.nowPlayingMovies} />
                <MovieList title="Popular Movies" movies={movies?.popularMovies} />
                </div>
            </div>
        </>
        )
    )
}

export default SecondaryContainer