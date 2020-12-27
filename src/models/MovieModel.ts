export interface MovieData {
    index?: number;
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Type: string;
}

export interface MovieSpecificData<T extends string> {
    Title: T;
    Year: T;
    Rated: T;
    Released: T;
    Runtime: T;
    Genre: T;
    Director: T;
    Writer: T;
    Actors: T;
    Plot: T;
    Language: T;
    Country: T;
    Awards: T;
    Poster: T;
    Ratings: {
        Source: T;
        Value: T;
    }[];
    Metascore: T;
    imdbRating: T;
    imdbVotes: T;
    imdbID: T;
    Type: T;
    totalSeasons: T;
    Response: T;
}
