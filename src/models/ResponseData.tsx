export interface ResponseData {
    Search: {
        Title: string;
        Year: string;
        Poster: string;
        imdbID: string;
        Type: string;
    }[];
    Response: string;
    totalResults: string;
}
