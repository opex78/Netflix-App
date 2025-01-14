import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

function VideoBackground({ movieId }) {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useMovieTrailer(movieId)
    return (
        <div className='w-screen'>
            <iframe className="w-screen aspect-video " src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=" + trailerVideo?.key + "&autoplay=1&mute=1&loop=1&playlist=" + trailerVideo?.key} allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div >
    )
}

export default VideoBackground