import React, { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import { ParamState } from "../models/ParamState";
import { ResponseData } from "../models/ResponseData";
import { fetchAllData } from "../utils/dataFetcher";

// interface MooviesData {

// }

const SearchBar: React.FC<ParamState> = ({ props }) => {
    const {
        setMoviesData,
        setIsFirstSearchDone,
        isFirstSearchDone,
        setErrorData,
    } = props;
    const searchBarRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const [isSearching, setIsSearching] = useState<boolean>(false);

    // const fetchData = async (): Promise<Response> => {
    //     const query = `http://www.omdbapi.com/?s=${
    //         searchBarRef.current.value
    //     }=${new Date().getFullYear().toString()}&apikey=480344f1&r`;
    //     console.log(query);
    //     const res = await fetch(query);
    //     const response = await res.json();
    //     return response;
    // };

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsFirstSearchDone(() => true);

        // await fetch()
        // const query = `http://www.omdbapi.com/?s=${searchBarRef.current.value}&apikey=480344f1&r`;
        setIsSearching((isSeaching) => true);
        try {
            const results = await fetchAllData(1, searchBarRef.current.value);
            setMoviesData(() => results);
            setErrorData(() => {
                return { state: false };
            });
        } catch (error) {
            console.log(error);
            setErrorData(() => {
                return { state: true, errorMessage: error };
            });
        }
        //setup sate
        setIsSearching((isSeaching) => {
            return false;
        });
    };
    return (
        <div
            className={`d-flex flex-column justify-content-center align-items-center ${
                isFirstSearchDone || "h-100"
            }`}
        >
            <form action="" className=" my-4" onSubmit={submitHandler}>
                <div className="input-container mb-4 rounded">
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
                    disabled={isSearching}
                >
                    {isSearching ? (
                        <i className="fa fa-spinner fa-spin"></i>
                    ) : (
                        "Search"
                    )}
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
