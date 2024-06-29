const ButtonGroup = () => {
  return (
    <>
      <div className="block w-72 rounded-md shadow-sm" role="group">
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Profile
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Settings
        </button>
        <button
          type="button"
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Messages
        </button>
      </div>

      <div>
        <button className="px-4 py-2 bg-gray-800 text-slate-200 font-medium text-sm rounded-s-lg focus:ring-2 focus:z-10 focus:ring-gray-700 border-t border-b hover:bg-gray-700 hover:text-gray-100">
          Profile
        </button>

        <button className="px-4 py-2 bg-gray-800 text-slate-200 font-medium text-sm border-l border-gray-600">
          Setting
        </button>
        <button className="px-4 py-2 outline-none hover:bg-gray-700  bg-gray-800 text-sm font-medium text-slate-200 border-l  border-gray-600 rounded-e-lg">
          Message
        </button>
      </div>
    </>
  );
};
export default ButtonGroup;
