const ButtonComponents = () => {
  return (
    <div>
      <button
        type="submit"
        className="bg-blue-900 text-slate-200 px-5 py-4 rounded-md  focus:ring-4
      focus:ring-blue-500 font-medium text-sm me-2 dark:bg-blue-600 dark:hover:bg-blue-700  focus:outline-none dark:focus:ring-blue-900"
      >
        Default
      </button>

      <button
        type="submit"
        className="px-5 py-4 bg-slate-600 text-white rounded-lg font-medium text-sm border border-gray-100 focus:outline-none hover:bg-slate-800 hover:text-slate-200
      focus:z-10 focus:ring-4 focus:ring-gray-200"
      >
        Alternative
      </button>
      <button
        type="submit"
        className="bg-slate-950 text-slate-200 px-5 py-4 me-2 mx-2 rounded-lg font-medium text-sm focus:outline-none focus:ring-4 focus:ring-gray-900
      hover:bg-slate-600 hover:text-slate-100"
      >
        Dark
      </button>
      {/* Button Pills */}
      <button
        type="submit"
        className="bg-green-700 text-slate-100 px-5 py-4 rounded-full  me-2 text-sm font-medium focus:outline focus:ring-4 focus:ring-green-400 hover:bg-green-500 hover:text-slate-200 "
      >
        Green
      </button>

      {/* Gradient dutone buttons */}

      <button
        type="submit"
        className="px-5 py-4 rounded-lg font-medium text-sm text-slate-200  focus:outline-none focus:ring-4 bg-gradient-to-r from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 me-2 mb-2"
      >
        Purple to Blue
      </button>

      <button
        type="submit"
        className="px-5 py-4 font-medium text-sm text-slate-200 rounded-lg bg-gradient-to-t from-cyan-500 to-blue-600 hover:bg-gradient-to-bl hover:text-blue-400 focus:ring-blue-300 mb-2 me-2 
         focus:outline-none focus:ring-4  "
      >
        Cyan to Blue
      </button>
      <button
        type="submit"
        className="px-5 py-4 font-medium text-sm bg-gradient-to-t from-purple-400 to-pink-400 text-slate-200 rounded-lg focus:outline-none focus:ring-purple-400 hover:bg-gradient-to-bl mb-2 me-2"
      >
        Purple to Pink
      </button>

      <button
        type="submit"
        className="px-5 py-5 border bg-black rounded-lg border-blue-700 font-medium text-center text-white text-sm focus:outline-none focus:ring-4 focus:ring-blue-800 hover:bg-blue-700"
      >
        Purple to Blue
      </button>

      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Purple to blue
        </span>
      </button>

      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600
         to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
          focus:ring-blue-300 shadow-lg  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Blue
      </button>

      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600
       to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300
       shadow-lg font-medium text-sm me-2 mb-2 px-5 py-2.5 text-center rounded-md "
      >
        {" "}
        Red
      </button>
      <br />
      <br />
      <br />

      <button
        type="button"
        className="bg-blue-900 px-6 py-3 inline-flex items-center text-white rounded-lg me-2 mb-2 focus:outline-none shadow-lg focus:ring-blue-900 focus:ring-4 font-medium text-sm text-center"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 8 19"
        >
          <path
            fill-rule="evenodd"
            d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
            clip-rule="evenodd"
          />
        </svg>
        Sign in with Facebook
      </button>

      <button
        type="button"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium text-sm focus:outline-none border-none focus:ring-4 focus:ring-blue-500 me-2 mb-2 inline-flex items-center"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 17"
        >
          <path
            fill-rule="evenodd"
            d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
            clip-rule="evenodd"
          />
        </svg>
        Sign in with Twitter
      </button>
    </div>
  );
};
export default ButtonComponents;
