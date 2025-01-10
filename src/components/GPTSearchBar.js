
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import model from '../utils/gemini';
import openai from '../utils/gemini';
import { addGptMovieResult } from '../utils/gptSlice';

function GPTSearchBar() {
    const searchText = useRef(null)
    const dispatch = useDispatch()
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS)
        const json = data.json()
        console.log("json.results", json.results)
        return json
    }

    const handleGPTSearchClick = async () => {
        console.log(searchText.current.value)

        // Make an api call to gpt api and get movie results using tmdb api

        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query: "
            + searchText.current.value + ". only give me names of 5 movies, comma separated like example result given ahead. Example Result: Gadar, Sholey, Don, Golmal, Koi Mil Gaya";

        const gptResults = await model.generateContent(gptQuery);
        console.log("gptResult", gptResults.response.candidates[0].content.parts[0].text)
        // For each movie I will search inside TMDB API
        const gptMovies = gptResults.response.candidates[0].content.parts[0].text.split(",");
        console.log("gptMovies", gptMovies)
        const promoiseArray = gptMovies.map((movie) => {
            console.log("searchMovieTMDB(movie)", searchMovieTMDB(movie))
            return searchMovieTMDB(movie)
        })
        const tmdbResults = await Promise.all(promoiseArray)

        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))
    }
    return (
        <div>
            <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                <input className='p-4 m-4 col-span-9' ref={searchText} type="text" placeholder="Search Here" />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGPTSearchClick}>Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar