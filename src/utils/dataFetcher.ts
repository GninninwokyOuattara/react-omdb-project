import { ResponseData, Response } from "../models/ResponseData";
import { MovieData } from "../models/MovieModel";

export const fetchAllData = async (
    page: number = 1,
    search: string
): Promise<MovieData[]> => {
    const query = `http://www.omdbapi.com/?s=${search}&page=${page}&apikey=480344f1&r`;
    let data: MovieData[] = [];
    const res = await fetch(query);
    const response = (await res.json()) as Response;
    const body = { ...response };
    if (body.Response === "True") {
        if (parseInt(body.totalResults) > 10) {
            const nPage = Math.ceil(parseInt(body.totalResults) / 10);
            console.log(nPage);
            data = [...body.Search];
            for (let i = 2; i <= nPage; i++) {
                const query = `http://www.omdbapi.com/?s=${search}&page=${i}&apikey=480344f1&r`;
                const newDataFetched = await fetch(query);
                const response = (await newDataFetched.json()) as ResponseData;
                response.Search.forEach((movie) => {
                    data = [...data, movie];
                });
            }
        } else {
            data = [...body.Search];
        }
    } else {
        if ((body.Error = "Movie not found!")) {
            throw new Error("Movie not found!");
        } else {
            throw new Error("Too many results");
        }
    }

    // console.log(data);
    data = data.filter((movie) => {
        return movie.Poster !== "N/A";
    });
    return data;
};
