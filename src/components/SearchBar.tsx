import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

type searchState = "null" | "string";

interface ParamState {
    props: {
        setMoviesData: Function;
        setIsLoading: Function;
    };
}

interface Response {
    Search?: {}[];
    Response: boolean;
    totalResults: string;
}

interface ResponseData {
    (): Promise<{}>;
}

const SearchBar: React.FC<ParamState> = (props) => {
    // console.log({ props });
    const searchBarRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const fetchData = async (): Promise<Response> => {
        const query = `http://www.omdbapi.com/?s=${
            searchBarRef.current.value
        }=${new Date().getFullYear().toString()}&apikey=480344f1&r`;
        console.log(query);
        const res = await fetch(query);
        const response = await res.json();
        return response;
    };

    const submitHandler = (e: React.FormEvent) => {
        console.log("hey");
        e.preventDefault();
        const moviesData = fetchData();
        console.log(moviesData);
    };
    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <form action="" className="form" onSubmit={submitHandler}>
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
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
