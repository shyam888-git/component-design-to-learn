const Example2 = () => {
  return (
    <div className="block max-w-md p-8 bg-slate-700 rounded-lg hover:bg-slate-800">
      <p className="text-slate-200 text-sm tracking-tight font-bold flex justify-center items-center text-justify ">
        Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Deleniti consequuntur officiis pariatur quaerat temporibus quam
        exercitationem aspernatur reprehenderit, inventore ducimus voluptas
        commodi facere placeatamet consectetur adipisicing elit. Deleniti
        consequuntur officiis pariatur quaerat temporibus quam exercitationem
        aspernatur reprehenderit, inventore ducimus voluptas commodi facere
        placeat?
      </p>
      <button
        type="button"
        className=" inline-flex gap-1 items-center px-5 py-2 bg-blue-500  text-slate-200  mt-2 rounded-md focus:outline-none focus:z-10 focus:ring-4 focus:ring-slate-600 hover:bg-blue-900 mb-2 me-2"
      >
        Read Me
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};
export default Example2;
