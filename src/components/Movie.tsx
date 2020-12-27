import React, { useContext } from "react";
import { ResponseData } from "../models/ResponseData";
import "./Movies.css";
import { MovieData } from "../models/MovieModel";
import { DetailContext, useGlobalContext } from "../context/appContexts";

const Movie: React.FC<MovieData> = ({
    Title,
    Year,
    Poster,
    imdbID,
    Type,
    index,
}) => {
    // console.log(Search);
    const { show } = useGlobalContext();

    return (
        <div
            className="movie-container"
            key={index}
            onClick={() => {
                show(imdbID);
                console.log("Overlay should have shown");
            }}
        >
            <div className="movie-picture">
                <img src={Poster} alt={Title} className="img movie-picture" />

                <div className="movie-info">
                    <div className="movie__title">{Title}</div>
                    <div className="year">Year : {Year}</div>
                    <div className="type">Categorie : {Type}</div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
