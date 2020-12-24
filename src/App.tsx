import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/SearchBar";
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie";
import { ResponseData } from "./models/ResponseData";
import { classify } from "./utils/dataClassification";

function App() {
    const [moviesData, setMoviesData] = useState<false | ResponseData>(false);
    const [isFirstSearchDone, setIsFirstSearchDone] = useState<boolean>(false);

    if (!isFirstSearchDone) {
        return (
            // <div className="d-flex flex-column justify-content-center align-items-center">
            <SearchBar props={{ setMoviesData, setIsFirstSearchDone }} />
            // </div>
        );
    } else {
        return (
            <React.Fragment>
                <SearchBar props={{ setMoviesData, setIsFirstSearchDone }} />
                <div className="movies-container container">
                    <div className="row gx-3 gy-2">
                        {moviesData !== false &&
                            moviesData.Search.map((movie) => {
                                return <Movie {...movie} />;
                            })}
                    </div>
                </div>

                {/* // moviesData.Search.map((movie) => {
                    //     <Movie data={movie} />;
                    // })} */}
                {/* {isFirstSearchDone && moviesData !== false
                    ? moviesData.Search.map((movie) => {
                          <Movie data={movie} />;
                      })
                    : undefined}
                {moviesData &&
                    moviesData.Search.map((movie) => {
                        console.log(movie.Title);
                    })}
                {moviesData && <h1>Movie</h1>
                } */}
            </React.Fragment>
        );
    }
}

export default App;
