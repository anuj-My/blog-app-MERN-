import { BiArrowBack } from "react-icons/bi";
const ErrorPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center h-screen">
      <div
        id="alert-additional-content-1"
        className="p-4 mb-4 w-[50%] text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
        role="alert"
      >
        <div className="flex items-center">
          <svg
            className="flex-shrink-0 w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <h3 className="text-lg font-medium">Page not found!</h3>
        </div>
        <div className="mt-2 mb-4 text-sm">
          The page you are trying to access does not exist on the site. Please
          go back to the homepage.
        </div>
        <div className="">
          <a
            href="/"
            className="text-white inline-flex gap-4 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-base px-3 py-2 mr-2 text-center  items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <BiArrowBack />
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
