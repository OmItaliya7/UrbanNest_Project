import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {

  const error = useRouteError();

  let title = "Something went wrong";
  let message = "An unexpected error occurred.";
  let status = 500;

  if (isRouteErrorResponse(error)) {
    status = error.status;

    if (error.status === 404) {
      title = "Page Not Found";
      message = "The page you are looking for does not exist.";
    }

    if (error.status === 500) {
      title = "Server Error";
      message = "Something went wrong on our side.";
    }
  }

  const goHome = () => {
    window.location.href = "/";
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center text-white bg-gradient-to-b from-black to-gray-900">

      <div className="max-w-xl space-y-6">

        <h1 className="font-bold text-red-500 text-7xl">
          {status}
        </h1>

        <h2 className="text-3xl font-semibold">
          {title}
        </h2>

        <p className="text-gray-400">
          {message}
        </p>

        <div className="flex justify-center gap-4 mt-6">

          <button
            onClick={goBack}
            className="px-6 py-3 transition bg-gray-700 rounded-lg hover:bg-gray-600"
          >
            Go Back
          </button>

          <button
            onClick={goHome}
            className="px-6 py-3 transition bg-red-600 rounded-lg hover:bg-red-500"
          >
            Go Home
          </button>

        </div>

      </div>

    </section>
  );
};

export default ErrorPage;