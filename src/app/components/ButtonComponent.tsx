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

      <button
        type="button"
        className="px-6 py-3 inline-flex items-center bg-slate-200 text-black font-medium text-sm mb-2 me-2 focus:outline-none focus:ring-4 focus:ring-offset-white rounded-md"
      >
        <svg
          aria-hidden="true"
          className="w-10 h-3 me-2 -ms-1"
          viewBox="0 0 660 203"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M233.003 199.762L266.362 4.002H319.72L286.336 199.762H233.003V199.762ZM479.113 8.222C468.544 4.256 451.978 0 431.292 0C378.566 0 341.429 26.551 341.111 64.604C340.814 92.733 367.626 108.426 387.865 117.789C408.636 127.387 415.617 133.505 415.517 142.072C415.384 155.195 398.931 161.187 383.593 161.187C362.238 161.187 350.892 158.22 333.368 150.914L326.49 147.803L319.003 191.625C331.466 197.092 354.511 201.824 378.441 202.07C434.531 202.07 470.943 175.822 471.357 135.185C471.556 112.915 457.341 95.97 426.556 81.997C407.906 72.941 396.484 66.898 396.605 57.728C396.605 49.591 406.273 40.89 427.165 40.89C444.611 40.619 457.253 44.424 467.101 48.39L471.882 50.649L479.113 8.222V8.222ZM616.423 3.99899H575.193C562.421 3.99899 552.861 7.485 547.253 20.233L468.008 199.633H524.039C524.039 199.633 533.198 175.512 535.27 170.215C541.393 170.215 595.825 170.299 603.606 170.299C605.202 177.153 610.098 199.633 610.098 199.633H659.61L616.423 3.993V3.99899ZM551.006 130.409C555.42 119.13 572.266 75.685 572.266 75.685C571.952 76.206 576.647 64.351 579.34 57.001L582.946 73.879C582.946 73.879 593.163 120.608 595.299 130.406H551.006V130.409V130.409ZM187.706 3.99899L135.467 137.499L129.902 110.37C120.176 79.096 89.8774 45.213 56.0044 28.25L103.771 199.45L160.226 199.387L244.23 3.99699L187.706 3.996"
            fill="#0E4595"
          />
          <path
            d="M86.723 3.99219H0.682003L0 8.06519C66.939 24.2692 111.23 63.4282 129.62 110.485L110.911 20.5252C107.682 8.12918 98.314 4.42918 86.725 3.99718"
            fill="#F2AE14"
          />
        </svg>
        Pay with Visa
      </button>
    </div>
  );
};
export default ButtonComponents;
