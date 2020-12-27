import React from "react";
import { Container } from "react-bootstrap";
import "./ErrorDisplay.css";

const ErrorDisplay: React.FC<{ errorMessage: string }> = ({ errorMessage }) => {
    const confused = "(o_O)";
    const notFound = ' (>_<)"';
    console.log("ErrorMessage", errorMessage);
    if (errorMessage === "Movie not found!") {
        return (
            <Container className="text-center error-container">
                <h1>{notFound}</h1>
                <p>{errorMessage}</p>
            </Container>
        );
    } else {
        return (
            <Container className="text-center error-container">
                <h1>{confused}</h1>
                <p>{errorMessage}</p>
            </Container>
        );
    }
};

export default ErrorDisplay;
