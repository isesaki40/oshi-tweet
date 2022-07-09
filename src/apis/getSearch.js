import axios from "axios";
import { search } from "../urls";

export const getSearch = (q) =>
  axios
    .get(search, {
      params: { query: q },
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
