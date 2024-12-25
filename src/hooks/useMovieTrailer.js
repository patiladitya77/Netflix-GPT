import { useEffect } from 'react'
import { addTrailerVideo } from '../Utils/moviesSlice';
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    //fetch trailer videos and updating the store with trailer video data
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)

        const json = await data.json();
        // console.log(json);

        const filterData = json.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length === 0 ? filterData[0] : json.results[0];
        //console.log(filterData);
        //console.log(videoTrailer?.key);
        dispatch(addTrailerVideo(trailer));

    }

    useEffect(() => {
        getMovieVideos();
    }, [])

}

export default useMovieTrailer