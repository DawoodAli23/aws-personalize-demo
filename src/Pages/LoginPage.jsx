import React, { useEffect, useState } from "react";
import { useSignin } from "../hooks/auth.hook";
import { Link, useNavigate } from "react-router-dom";
import { getItem, setItem } from "../util/localStorage";
function Login() {
  const { mutateAsync, isLoading } = useSignin();
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const navigate = useNavigate();
  const handleSignIn = async (event) => {
    event.preventDefault();
    const [{ value: email }, { value: password }] = event.target;
    !email && setEmailError("This field cannot be empty");
    !password && setPasswordError("This field cannot be empty");
    if (email && password) {
      try {
        const {
          data: { status, token, user },
        } = await mutateAsync({
          email,
          password,
        });
        if (status === 200) {
          console.log(user, token);
          setItem("user", JSON.stringify(user));
          setItem("token", JSON.stringify(user));
          navigate("/products");
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  useEffect(() => {
    if (getItem("user") && getItem("token")) {
      navigate("/products");
    }
  }, []);
  return (
    <div className="b grid h-screen w-screen place-items-center text-center shadow-white drop-shadow-2xl">
      <div className="w-full max-w-xs">
        <form
          className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md"
          onSubmit={handleSignIn}
        >
          <div className="mb-4 flex flex-col items-start">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              onChange={() => setEmailError(null)}
              className={`focus:shadow-outline w-full appearance-none rounded  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none ${
                emailError ? "border border-red-600" : "border"
              }`}
              forHTML="email"
              type="text"
            ></input>
            {emailError ? (
              <p className="text-xs italic text-red-500">{emailError}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="mb-6  flex flex-col items-start">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              className={`focus:shadow-outline mb-3 w-full appearance-none rounded  py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none ${
                passwordError ? "border border-red-600" : "border"
              }`}
              onChange={() => setPasswordError(null)}
              id="password"
              type="password"
            ></input>
            {passwordError ? (
              <p className="text-xs italic text-red-500">{passwordError}</p>
            ) : (
              <></>
            )}
          </div>
          <div className="flex items-center justify-between">
            <Link
              className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
              to={"/signup"}
            >
              Don't have an account
            </Link>
            <button
              className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-xs text-gray-500">
          &copy;Made by https://github.com/DawoodAli23
        </p>
      </div>
    </div>
  );
}

export default Login;
