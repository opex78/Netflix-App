import React from 'react'
import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import GPTSearch from './GPTSearch'
import GPTSearchBar from './GPTSearchBar'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

function Browse() {
    useNowPlayingMovies()
    usePopularMovies()
    const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
    return (
        <div>
            <Header />
            {showGPTSearch ? <div><GPTSearch /></div> : <div>
                <MainContainer />
                <SecondaryContainer />
            </div>
            }
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