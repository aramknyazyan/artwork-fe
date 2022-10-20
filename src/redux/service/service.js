import useFetch from "../../shared/useFetch/useFetch";
import axios from "axios";

export const GetArtwork = (queryParams) =>
  useFetch("get", `/artwork?${queryParams}`);

export const GetArtworkById = (id) => useFetch("get", `/artwork/${id}`);

export const GetArtworkHistory = (id) =>
  useFetch("get", `/artwork/${id}/history`);

export const PostArtwork = (data) => useFetch("post", "/artwork", data);

export const PatchArtwork = (id, data) =>
  useFetch("patch", `/artwork/${id}`, data);

export const GetSignedURL = () => useFetch("get", "/aws/signed-url");

export const PutSignedURL = (url, data, type) => {
  axios.put(url, data, {
    headers: {
      "Content-Type": `${type}`,
    },
  });
};
