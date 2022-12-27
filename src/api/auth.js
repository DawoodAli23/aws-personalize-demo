import axios from "axios";

export const singIn = (authCred) => {
  axios.post("http://localhost:3333/signin", { ...authCred });
};
