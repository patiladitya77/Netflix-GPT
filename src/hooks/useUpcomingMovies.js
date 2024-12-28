import { useDispatch } from "react-redux";
import { addTopRatedMovies, addUpcomingMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useUpcomingMovies = () => {
    //fetch data from TMDB and update store
    const dispatch = useDispatch();
    const getuseUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getuseUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;