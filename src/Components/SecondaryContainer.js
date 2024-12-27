import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
        movies.nowPlayingMovies &&
        <div className=' bg-black'>
            <div className='-mt-64 pl-12 relative z-20'>

                <MovieList title={"now playing"} movies={movies.nowPlayingMovies} />
                <MovieList title={"Top rated"} movies={movies.TopRatedMovies} />
                <MovieList title={"Popular"} movies={movies.PopularMovies} />
                <MovieList title={"Upcoming"} movies={movies.UpcomingMovies} />
            </div>

        </div>
    )
}

export default SecondaryContainer