import { useQuery } from "react-query";
import { getProductDetail, getProducts } from "../api/products";

export function useGetProducts(query) {
  return useQuery(["products", query], () => getProducts(query), {
    refetchOnWindowFocus: false,
  });
}
export function useGetProductDetails(id) {
  return useQuery(["productDetail", id], () => getProductDetail(id), {
    refetchOnWindowFocus: false,
  });
}
