import axios from "axios";
import { test } from "../urls";

export const getTest = () =>
  axios
    .get(test, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
