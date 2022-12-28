import axios from "axios";

export function singIn(authCred) {
  return axios.post("http://localhost:3333/user/signin", authCred);
}
