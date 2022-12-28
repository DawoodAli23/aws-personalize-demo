import { useMutation } from "react-query";
import { singIn } from "../api/auth";

export function useSignin(body) {
  return useMutation(singIn, body);
}
