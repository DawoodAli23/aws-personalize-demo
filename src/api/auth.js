import axios from "axios";

export function singIn(authCred) {
  return axios.post("http://localhost:3333/user/signin", authCred);
}

export function singUp(authCred) {
  return axios.post("http://localhost:3333/user/signup", authCred);
}
