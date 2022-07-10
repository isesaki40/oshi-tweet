import axios from "axios";
import { getImg } from "../urls";

export const getImgUrl = (id) =>
  axios
    .get(getImg(id), {
      params: { "user.fields": "profile_image_url" },
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
      },
    })
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
