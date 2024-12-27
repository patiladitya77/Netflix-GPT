import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'  >
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='text-lg py-6 w-1/4'>{overview}</p>
            <div className='flex'>
                <button className='bg-white p-4 px-12 flex rounded-lg text-black hover:bg-opacity-80 ' ><img className='w-5 ' src='https://icons.veryicon.com/png/o/internet--web/web-video-clip/play-332.png' alt='playicon' /> Play Now</button>
                <button className='mx-2 bg-gray-500 p-4 px-12 flex rounded-lg text-black '>More Info</button>
            </div>
        </div >
    )
}

export default VideoTitle