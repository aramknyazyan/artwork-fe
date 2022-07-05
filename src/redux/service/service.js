import useFetch from "../../shared/useFetch/useFetch";

export const GetArtwork = () => useFetch("get", "/artwork");

export const GetSignedURL = () => useFetch("get", "/aws/signed-url");

export const PostArtwork = () => useFetch("post", "/artwork");
