import axios from "axios";
import { getItem } from "../util/localStorage";

export function getProducts({ offset, limit }) {
  return axios.get(
    `http://localhost:3333/product/?offset=${offset}&limit=${limit}`,
    {
      headers: {
        Authorization: getItem("token"),
      },
    }
  );
}

export function getProductDetail(id) {
  return axios.get(`http://localhost:3333/product/${id}`, {
    headers: {
      Authorization: getItem("token"),
    },
  });
}
