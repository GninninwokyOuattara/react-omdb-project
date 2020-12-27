import React, { useState, useEffect } from "react";
import "./MovieDetails.css";
import { useGlobalContext } from "../context/appContexts";
import { Container, Row, Col } from "react-bootstrap";
import { fetchDetailsInfo } from "../utils/dataFetcher";
import { MovieSpecificData } from "../models/MovieModel";

const MovieDetails: React.FC<{ showDetailModal: string }> = ({
    showDetailModal,
}) => {
    const { hide } = useGlobalContext();
    const [detailsInfo, setDetailsInfo] = useState<
        false | MovieSpecificData<string>
    >(false);
    const [tags, setTags] = useState<string[]>([]);

    const tagsSetter = (tagsString: string): void => {
        const tags = tagsString.split(",");
        tags.forEach((tag) => tag.trim());
        setTags(() => tags);
    };

    useEffect(() => {
        fetchDetailsInfo(showDetailModal).then((details) => {
            console.log(details);
            setDetailsInfo(() => {
                return details;
            });
            // console.log(detailsInfo === false);
            // if (detailsInfo !== false) {
            //     tagsSetter(detailsInfo.Genre);
            //     console.log(tags);
            //     // let tags = detailsInfo.Genre.split(",");
            //     // tags.forEach((tag) => tag.trim());
            //     // setTags(() => {
            //     //     return tags;
            //     // });
            //     // console.log("tags-", tags);
            // }
        });
        return () => {
            setDetailsInfo(() => {
                return false;
            });
        };
    }, []);

    useEffect(() => {
        console.log(detailsInfo === false);
        if (detailsInfo) {
            tagsSetter(detailsInfo.Genre);
        }

        return () => {
            setTags(() => []);
        };
    }, [detailsInfo]);
    return (
        <React.Fragment>
            <div className="details-overlay" onClick={() => hide()}></div>
            <div className="details-container">
                {detailsInfo ? (
                    <Container className="p-0">
                        <Row className="gx-3 gy-2 w-100 m-0">
                            <Col
                                xs={12}
                                md={3}
                                className="img-rating m-0 align-self-start"
                            >
                                <div className="img-container">
                                    <img
                                        src={detailsInfo.Poster}
                                        alt={detailsInfo.Title}
                                    />
                                </div>
                                <h2 className="movie-ratings text-center mt-2">
                                    {detailsInfo.imdbRating}
                                </h2>
                            </Col>
                            <Col xs={12} md={9} className="more-info">
                                <h2 className="movie-title">
                                    {detailsInfo.Title}
                                </h2>
                                <div className="movie-plot">
                                    {detailsInfo.Plot}
                                </div>
                                <div className="movie-tags">
                                    {tags.map((tag) => {
                                        return (
                                            <span className="tag">{tag}</span>
                                        );
                                    })}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                ) : (
                    <div className="loader-container">
                        <i className="fa fa-spinner fa-10x fa-spin"></i>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default MovieDetails;
