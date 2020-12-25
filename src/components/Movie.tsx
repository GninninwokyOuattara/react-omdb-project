import React from "react";
import { ResponseData } from "../models/ResponseData";
import "./Movies.css";

interface MovieData {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Type: string;
}

const Movie: React.FC<MovieData> = ({ Title, Year, Poster, imdbID, Type }) => {
    // console.log(Search);
    return (
        <div className="">
            <div className="movie-picture">
                <img src={Poster} alt={Title} className="img movie-picture" />
            </div>
        </div>
    );
};

export default Movie;
