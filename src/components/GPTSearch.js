import React from 'react'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'

function GPTSearch() {
    return (
        <div className=''>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch