import useFetch from "../../shared/useFetch/useFetch";

export const GetArtwork = () => useFetch("get", "/artwork");
