import { useMutation } from "react-query";
import { singIn, singUp } from "../api/auth";

export function useSignin(body) {
  return useMutation(singIn, body);
}

export function useSignup(body) {
  return useMutation(singUp, body);
}
