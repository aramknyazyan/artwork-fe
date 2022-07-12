import useFetch from "../../shared/useFetch/useFetch";

export const GetArtwork = () => useFetch("get", "/artwork");

export const PostArtwork = () => useFetch("post", "/artwork");

export const GetSignedURL = () => useFetch("get", "/aws/signed-url");

export const PutSignedURL = (url, data) => {
  console.log(url, "url");
  useFetch("put", url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
