import { useMutation } from "react-query";
import { singIn } from "../api/auth";

export const useSignin = (body) => {
  return useMutation(singIn, body);
};
