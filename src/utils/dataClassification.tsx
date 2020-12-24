import SearchBar from "../components/SearchBar";
import { ResponseData } from "../models/ResponseData";

interface Classification {
    movies: {}[];
    series: {}[];
}

export const classify = (data: ResponseData): {} => {
    const classifiedData: Classification = { movies: [], series: [] };
    data.Search.forEach((item) => {
        if (item.Type === "series") {
            classifiedData["series"].push(item);
        } else {
            classifiedData["movies"].push(item);
        }
    });
    return classifiedData;
};
