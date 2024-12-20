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
}

export default Browse