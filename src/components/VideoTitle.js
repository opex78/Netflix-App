import React from 'react'

function VideoTitle({ title, overview }) {
    return (
        <div className='w-screen pt-[20%] aspect-video px-24 absolute text-white from-black bg-gradient-to-r'>
            <h1 className='font-bold text-6xl'>{title}</h1>
            <p className='py-10 text-lg w-1/4'>{overview}</p>
        </div>
    )
}

export default VideoTitle