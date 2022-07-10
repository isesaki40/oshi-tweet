import axios from "axios";
import { countSearch } from "../urls";

export const getSearchCount = (q) =>
  axios
    .get(countSearch, {
      params: { query: q },
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
