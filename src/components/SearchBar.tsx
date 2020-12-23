import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

type searchState = "null" | "string";

const SearchBar: React.FC = (props) => {
    const searchBarRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const clickHandler = () => {
        console.log(searchBarRef.current.value);
        searchBarRef.current.value = "";
    };

    const fetchFromApi = async () => {
        const res = await fetch(
            "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/*",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "5dcc4627a8mshabdde2657854622p105f95jsn912ffefb58d9",
                    "x-rapidapi-host":
                        "imdb-internet-movie-database-unofficial.p.rapidapi.com",
                },
            }
        );
        const response = await res.json();

        console.log("from APi", response);
    };

    useEffect(() => {
        const fetchData = async () => {
            const query = `http://www.omdbapi.com/?y=${new Date()
                .getFullYear()
                .toString()}&apikey=480344f1&r`;
            console.log(query);
            const res = await fetch(query);
            const response = await res.json();
            console.log(response);
        };

        fetchData();
        fetchFromApi();
        return () => {
            // cleanup
        };
    }, []);

    const submitHandler = () => {
        console.log(searchBarRef.current.value);
    };
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form action="" className="form">
                <div className="input-container my-4 rounded">
                    <i className="fal fa-search"></i>
                    <input
                        className="form__input"
                        type="text"
                        placeholder="Looking for ?"
                        ref={searchBarRef}
                    />
                </div>
                <button
                    type="submit"
                    className="form__btn-submit w-50 d-block mx-auto rounded border-0 text-white"
                    onSubmit={submitHandler}
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
