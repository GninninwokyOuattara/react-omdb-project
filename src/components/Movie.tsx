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
        <div className="movie col-sm-6 col-md-3">
            <div className="movie-picture w-100 h-100">
                <img src={Poster} alt="" />
            </div>
        </div>
    );
};

export default Movie;
