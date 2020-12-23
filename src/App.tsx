import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/SearchBar";
import SearchBar from "./components/SearchBar";

function App() {
    const [moviesData, setMoviesData] = useState<{}>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    return <SearchBar props={{ setMoviesData, setIsLoading }} />;
}

export default App;
