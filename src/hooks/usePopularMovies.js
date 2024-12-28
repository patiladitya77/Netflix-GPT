import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const usePopularMovies = () => {
    //fetch data from TMDB and update store
    const dispatch = useDispatch();
    const getusePopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        //  console.log(json.results);
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
        getusePopularMovies();
    }, [])
}

export default usePopularMovies;