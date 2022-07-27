import Axios from "axios";

export const getAPIaddress = () => "https://test-content-library.sbdagroup.com";

const useFetch = (method, url, data, headers) => {
  return new Promise(async (resolve, reject) => {
    const apiurl = `${process.env.REACT_APP_API_URL}${url}`;

    const config = {
      method: method.toLowerCase(),
      url: apiurl,
      data,
      headers,
    };

    try {
      await Axios(config).then((response) => {
        resolve(response.data);
      });
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        if (error?.response) {
          if (error?.response.status === 401) {
            reject("401");
          } else {
            reject(error?.response || "Error");
          }
        }
      } else {
        reject("Error");
      }
    }
  });
};

export default useFetch;
