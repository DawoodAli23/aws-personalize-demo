import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="grid h-screen place-items-center">
      <div>
        <h1 className="mb-2 text-6xl font-extrabold text-red-700">Oops!</h1>
        <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-2xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
