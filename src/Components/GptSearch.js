import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { LOGIN_BG } from '../Utils/constants';

const GptSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
                <img
                    src={LOGIN_BG}
                    alt="bg"
                />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch;