import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./components/SearchBar";
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie";
import ErrorDisplay from "./components/ErrorDisplay";
import MovieDetails from "./components/MovieDetails";
import { ResponseData } from "./models/ResponseData";
import { MovieData } from "./models/MovieModel";
import { classify } from "./utils/dataClassification";
import { Container, Row, Col } from "react-bootstrap";
import { useGlobalContext } from "./context/appContexts";

function App() {
    const [moviesData, setMoviesData] = useState<false | MovieData[]>(false);
    const [errorData, setErrorData] = useState<{
        state: boolean;
        errorMessage?: string;
    }>({ state: false });
    const { showDetailModal } = useGlobalContext();
    const [isFirstSearchDone, setIsFirstSearchDone] = useState<boolean>(false);

    if (!isFirstSearchDone) {
        return (
            <Container>
                <SearchBar
                    props={{
                        setMoviesData,
                        setIsFirstSearchDone,
                        setErrorData,
                        isFirstSearchDone,
                    }}
                />
            </Container>
        );
    } else {
        if (errorData.state && errorData.errorMessage) {
            return (
                <Container>
                    <SearchBar
                        props={{
                            setMoviesData,
                            setIsFirstSearchDone,
                            setErrorData,
                            isFirstSearchDone,
                        }}
                    />
                    <ErrorDisplay errorMessage={errorData.errorMessage} />
                </Container>
            );
        } else {
            return (
                <React.Fragment>
                    <Container>
                        <SearchBar
                            props={{
                                setMoviesData,
                                setIsFirstSearchDone,
                                setErrorData,
                                isFirstSearchDone,
                            }}
                        />
                        <Row className={"gx-3 w-100 gy-4"}>
                            {moviesData !== false &&
                                moviesData.map((movie, index) => {
                                    movie = { ...movie, index };
                                    return (
                                        <Col sm={6} md={3}>
                                            <Movie {...movie} />
                                        </Col>
                                    );
                                })}
                        </Row>
                    </Container>
                    {showDetailModal && (
                        <MovieDetails showDetailModal={showDetailModal} />
                    )}
                </React.Fragment>
            );
        }
    }
}

export default App;
