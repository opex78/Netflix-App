import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'

function Browse() {
    useNowPlayingMovies()
    return (
        <div>
            <Header />
            <MainContainer />
        </div>
    )
    /*
    MainContainer
        - VideoBackground
        - VideoTitle
    SecondaryContainer
        - MovieList
        - Cards * n
    */
}

export default Browse