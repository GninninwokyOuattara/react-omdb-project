export interface ResponseError {
    Response: "False";
    Error: "Movie not found!" | "Too many results";
}
export interface ResponseData {
    Search: {
        Title: string;
        Year: string;
        Poster: string;
        imdbID: string;
        Type: string;
    }[];
    Response: "True";
    totalResults: string;
}

export type Response = ResponseError | ResponseData;
