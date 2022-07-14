import useFetch from "../../shared/useFetch/useFetch";

export const GetArtwork = () => useFetch("get", "/artwork");

export const GetArtworkById = (id) => useFetch("get", `/artwork/${id}`);

export const GetArtworkHistory = (id) =>
  useFetch("get", `/artwork/${id}/history`);

export const PostArtwork = (data) => useFetch("post", "/artwork", data);

export const PatchArtwork = (id, data) =>
  useFetch("patch", `/artwork/${id}`, data);

export const GetSignedURL = () => useFetch("get", "/aws/signed-url");

export const PutSignedURL = (url, data) => {
  useFetch("put", url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
